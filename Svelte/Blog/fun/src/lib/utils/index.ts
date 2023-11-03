// Essa é uma helper function (um middleware if you will)
// É só uma forma de organizar o código ao longo do projeto

//vai pegar todos os posts (arquivos .md)
//isso através do vite (aqui ele age como se fosse um node, acessando o sistema)

export const fetchPosts = async (lim=0) => {
    try {
        //faz tipo um regex com o vite para achar todos os arquivos que queremos (posts)
        const allPostsFiles:Record<string, () => Promise<any>> = import.meta.glob('/src/routes/blog/posts/*.md')

        //para evitar travar o server, esperendo pelo fetch (que no caso é local):
        const allPosts = await Promise.all(
            //Object.entries converte o objeto uma array para poder iterar sobre ela
            Object.entries(allPostsFiles).map(async (elem) => {
                //poderiamos fazer o destructuring da array acima, mas n precisa
                //elem é uma array que contém: path do direito para o arquivo + função (chamada de resolver) que retorna metadados (é do vite)
                //apartir do path do diretório, vamos derivar o path da url para o post (isso só funciona pq todos os posts ficam dentro de blog - pense sobre)
                const folderPath = elem[0]
                const metadataFunc = elem[1]
                const metadataOBJ = await metadataFunc()
                
                return {
                    urlPath: folderPath.slice(11, -3).replace("/posts", ""), //pegando só o blog/posts/x para todo arquivo
                    metadata: metadataOBJ.metadata
                }
            })
        )

        if(lim === 0) return allPosts
        if(lim !== 0) return allPosts.slice(0,lim)
    
    } catch (error) {
        throw new Error(`${error}`);
    }
}