const btnClicar = document.querySelector("#btnClicar");
const listFilmes = document.querySelector('#listFilmes');
const InputFilme = document.querySelector('#inputFilme');

btnClicar.addEventListener('click', function(infoDoEvento){

    infoDoEvento.preventDefault();
    let respostaUser = InputFilme.value;

    let novoFilme = document.createElement('li')
    novoFilme.innerText = respostaUser

    let btnEditar = document.createElement('button')
    btnEditar.innerText = respostaUser
    novoFilme.append(btnEditar)
    btnEditar.addEventListener('click', function(){
        novoFilme.classList.toggle('esconder')
    })

    listFilmes.append(btnEditar)

    /// mudar as propriedades do CSS
    novoFilme.style.color= "red"

    ///mudar propriedades da classe
    novoFilme.classList.add('link-verde')

    ///.classlist.ADD()adiciona uma classe ao elemento HTML
    ///.classlist.TOGGLE() um interruptor para as classes, entraria no lugar d add acima


    ///.append()- adiciona um elemento html dentro do outro
    listFilmes.append(novoFilme)

    
})