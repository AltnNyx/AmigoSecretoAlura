// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Array////////////////////////////////////////////////////////////////////////////////
    let amigos = [];

//Agregar nombres////////////////////////////////////////////////////////////////////////////////
    function agregarAmigo(){
        let nombreAmigo = document.getElementById('amigo').value;

        if(!validarEntrada(nombreAmigo)){
            return;
        }

        amigos.push(nombreAmigo);

        actualizarLista();

        document.getElementById('amigo').value = "";
    }

//Actualizar la lista////////////////////////////////////////////////////////////////////////////////
    function actualizarLista(){
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";//se limpia lista de la página

        for(let i = 0; i < amigos.length ;i++){
            let li = document.createElement("li");
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }

//Sorteo aleatorio////////////////////////////////////////////////////////////////////////////////
    function sortearAmigo(){
        if(!validarLista()){
                return;//sale de la función
        }

        let indiceRandom = Math.floor(Math.random() * amigos.length);
        let nombreAmigoSorteo = amigos[indiceRandom];

        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `Tu amigo secreto es ${nombreAmigoSorteo}`;
    }

//Validaciones////////////////////////////////////////////////////////////////////////////////
    function validarEntrada(nombreAmigo){
        if(nombreAmigo.trim() == ""){
            alert('El nombre no puede estar vacío');
            return false;
        }

        const patron = /^[a-zA-Z][a-zA-Z0-9_ ]{2,15}$/;

        if(!patron.test(nombreAmigo)){
            alert('El nombre solo puede contener letras');
            return false;
        }

        return true;
    }


    function validarLista(){
        if(amigos.length === 0){
            alert('La lista de amigos no puede estar vacía');
            return false;
        }
        return true;
    }
