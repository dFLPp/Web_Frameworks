#### Info

- Redux é um package =que ajuda a controlar o 'state' em aplicações complexas (não é exclusivo do React)
- Redux-toolkit package que instala todos os packages que você precisará:
- react-redux(state management), immer(mutate state), redux-thunk(handle async actions), reselect(simplify reduce functions)
- redux é relativamente parecido com useReducer, então para entender um você precisa do outro.

#### Setup

- O redux funciona como se fosse um 'router + Context API', tipo:
- cria-se um arquivo central que vai conter todo os estados da aplição, então usa-se um provider para compartilhar esses estados
- Esse 'comando central' normalmente é chamado de store

#### Slices

- Para efetivamente criar um estado, precisamos criar um Slice. Slice é basicamente a feature do nosso app.
- Depois é preciso exportar o reducer (quem é capaz de modificar o estado) para à store (a central que possue todos os reducers)

### Acessando os States

- Para acessar um state usamos o 'useSelector', ele vai nos retornar todo o estado do nosso app
- Apartir daí é só procurar dentro do objeto qual estado você quer
