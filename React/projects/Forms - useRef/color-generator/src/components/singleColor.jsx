import React from 'react'
import rgbToHex from '../utils/utils'

export default function SingleColor({rgb, weight, index}) {
    const [alert, setAlert] = React.useState(false);
    const bcg = rgb.join(','); 
    const hex = rgbToHex(...rgb)

    React.useEffect(() => {setTimeout(() => {setAlert(false)}, 3000)}, [alert])

    return (<>
    <article className={`color ${index > 10 && 'color-light'}`} style={{backgroundColor:`rgb(${bcg})`}}
    onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
    }}
    >
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hex}</p>
        {alert && <p>copied</p>}
    </article>
    </>)
}
