class Connect{
  constructor(pergunta){
    this.pergunta = pergunta;
  }
  enviarPergunta(){
    const pergunta = connectApiChatGPT(this.pergunta);
    return pergunta;
  }
  static typeWrite(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function (letra, i) {

            setTimeout(function () {
                    elemento.innerHTML += letra;
            }, 75 * i)

    });
}

}

const enviarPergunta = async() => {
    const pergunta = document.querySelector("#pergunta")

    const spinner = document.querySelector("#spinner")
     spinner.style.display = "block";

    const paragrafo = document.createElement("p");
    paragrafo.textContent = pergunta.value;
    const content = document.querySelector(".content");
    content.appendChild(paragrafo);

    pergunta.value = "";

    const connect = new Connect(pergunta.value);
    connect.typeWrite(paragrafo);

    const resposta = await connect.enviarPergunta();


    const perguntinha = document.createElement("p");
    perguntinha.textContent = resposta;
    content.appendChild(perguntinha)
   

    spinner.style.display = "none";

  console.log(resposta);
}

