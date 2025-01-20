//Array////////////////////////////////////////////////////////////////////////////////
let amigos = [];
let amigosSorteados = [];

//Agregar nombres////////////////////////////////////////////////////////////////////////////////
function agregarAmigo(){
    let nombreAmigo = document.getElementById('amigo').value;

    if(!validarEntrada(nombreAmigo)){
        document.getElementById('amigo').value = "";
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

    //evita repetir el amigo que se sorteo anteriormente
    if(amigosSorteados.includes(nombreAmigoSorteo)){
        return sortearAmigo();
    }

    //agregar amigo a los amigos que ya se sortearon
    amigosSorteados.push(nombreAmigoSorteo);
    
    //mostrar resultado
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
    if(amigos.length === amigosSorteados.length){
        alert('Todos los amigos han sido sorteados');
        return false;
    }
    return true;
}
