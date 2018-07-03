function saveComment(){
 //Validacion inputs
 if((document.getElementById('name').value ==='') ||
 (document.getElementById('comment').value === '' )){
     alert('no puede dejar campos vacios')
 } else{
     let name=document.getElementById('name').value;
     let comment = document.getElementById ('comment').value;
     localStorage.setItem(name, comment);// En este punto guardo nombre y comment en mi local storage
 }
}

function printComment(){//Función para imprimir el mensaje en la pantalla.

    document.getElementById('datos').innerHTML = '';
    for(let i = i; i < localStorage.length; i++) {
        let commentName = localStorage.key(i);
        let comentarioTexto = localStorage.getItem(commentName);

        let singleComment = document.createElement('div');
        singleComment.className = 'singleComment';

        let titleComment = document.createElement('h5');
        let nodeTitleComment = document.createTextNode(commentName);
        titleComment.appendChild(nodeTitleComment);

        let pComment = document.createElement('p');
        let nodeP = createTextNode(comentarioTexto);
        pComment.appendChild(nodeP);

        singleComment.appendChild(titleComment);
        singleComment.appendChild(pComment);

        document.getElementById('datos').appendChild(singleComment);
    }
}

function deleteComments(){
    //Limpiamos todo lo del localStorage con .clear(), recordar nque window es objeto global.
    window.localStorage.clear();
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';
    document.getElementById('datos').innerHTML = '';
}

function makeComment(){
    if(typeof(Storage) !== 'undefined') 
    {
        saveComment();
        printComment();
        document.getElementById('name').value = '';
        document.getElementById('comment').value = '';
    }
    else
    {
        alert('lo sentimos, el web storage ')
    }
}