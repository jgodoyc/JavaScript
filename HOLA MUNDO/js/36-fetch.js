'use strict'

// Fetch (Ajax) y peticiones a servicios api rest

var div_usuarios = document.querySelector("#usuarios");
var div_janet = document.querySelector("#janet");

getUsuarios()
    .then(data => data.json()) // se convierten datos en json
    .then(users => {
        listadoUsuarios(users.data);

        return getJanet();
    })
    .then(data => data.json())
    .then(user => {
        MostrarJanet(user.data);

        return getInfo();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    });

function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}

function getJanet() {
    return fetch('https://reqres.in/api/users/2');
}

function getInfo() {
    var profesor = {
        nombre: 'Javier',
        apellidos: 'Godoy',
        url: 'www.google.cl'

    };

    return new Promise((resolve, reject) => {
        var profesor_string = JSON.stringify(profesor);

        if (typeof profesor_string != 'string') return reject('error');

        return resolve(profesor_string);
    });

}

function listadoUsuarios(usuarios) {
    usuarios.map((user, i) => {
        let nombre = document.createElement('h3');

        nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;

        div_usuarios.appendChild(nombre);

        document.querySelector(".loading").style.display = "none";
    });
}


function MostrarJanet(user) {
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');

    nombre.innerHTML = user.first_name + " " + user.last_name;

    avatar.src = user.avatar;
    avatar.width = '100';

    div_janet.appendChild(nombre);
    div_janet.appendChild(avatar);


    document.querySelector("#janet .loading").style.display = "none";

}