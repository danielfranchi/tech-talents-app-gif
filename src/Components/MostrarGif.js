import React from 'react'
import Button from './Button'

const MostrarGif = () => {

    const [gif, setGif] = React.useState(false)

    if(gif){
        return (
            <>
                <img src="https://cdn.dicionariopopular.com/imagens/nazareconfusamatematica.gif" alt="gif" 
                onClick={ () => setGif(!gif)} /> <br/>
            </>
        )
    }else{
        return(
            <Button gif={gif} setGif={setGif} text='Mostrar Gif' />
        )
    }
    
}

export default MostrarGif
