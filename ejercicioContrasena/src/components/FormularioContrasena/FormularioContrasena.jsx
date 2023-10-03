import { useState } from "react"

function FormularioContrasena(){
    const [password, setPassword] = useState("")

    function handleOnChangePassword(event){
        const introducedPassword = event.target.value
        setPassword(introducedPassword)
    }

    function checkPassword(){
        let puntuacion = 0
        puntuacion += checkLongitud()
        puntuacion += checkCaracteres()

        if (puntuacion===9)
            puntuacion+=1

        window.alert(puntuacion)
        event.preventDefault()
    }

    function checkLongitud(){
        let longitud = password.length
        if(longitud<=6)
            return 0
        else if(longitud<=8)
            return 1
        else if(longitud<=12)
            return 2
        else
            return 3
    }
    
    function checkLetras(){
        
        if(/[A-Z]/.test(password) && /[a-z]/.test(password))
            return 3
        else if(/[A-Z]/.test(password) || /[a-z]/.test(password))
            return 1
        else 
            return 0
    }

    function checkNumeros(){
        if(/[0-9]/.test(password))
            return 1
        else
            return 0
    }

    function checkEspeciales(){
        if(/[^a-zA-Z0-9]/.test(password))
            return 2
        else 
            return 0
    }

    function checkCaracteres(){
        return checkLetras()+checkNumeros()+checkEspeciales()
    
    }
    return(
        <form onSubmit={checkPassword}>
            <p>Contraseña</p>
            <input type="text" name="Password" value={password} onChange={handleOnChangePassword}></input>
            <input type="submit" value="Enviar"></input>
        </form>
    )
}

export default FormularioContrasena