
//Creamos una constante con la api
const apiURL = 'http://13.36.39.252:9393/api'
//Concatenamos la api mas el register
const apiRegister = apiURL + 'v1/register'
//Concatenamos la api mas el login
const apiLogin = apiURL + 'v1/login'

//Preparamos el usuario con el que nos vamos a registrar
const prepareRegister = () => {
    //Creamos un OBJETO con los datos del usuario
    const user = {
        nick_name: 'pedro',
        password: '1234',
    }
    //Llamamos a la FUNCION register con el usuario que hemos creado
    register(user)
}

//Funcion para registrar un usuario asyncrona
const register = async user => {
    //Header (cabecera de la peticion)
    const header = new Headers() //-->new array
    //-->añadimos un elemento al array primero le pasas como string el content type y el segundo applicaciton/json
    header.append('Content-Type', 'application/json') 

    //Body (cuerpo de la peticion)
    const myInit ={
        method: 'POST', //-->metodo
        headers: header, //-->cabecera
        body: JSON.stringify(user) //-->cuerpo
    }

    const request = await fetch(apiRegister, myInit) //-->hacemos la peticion
   
}