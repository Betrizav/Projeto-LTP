class Connect{
  constructor(pergunta){
    this.pergunta = pergunta;
  }
  enviarPergunta(){
    const pergunta = connectApiChatGPT(this.pergunta);
    return pergunta;
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
    const resposta = await connect.enviarPergunta();


    spinner.style.display = "none";

  console.log(resposta);
}

