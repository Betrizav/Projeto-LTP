const enviarPergunta = async() => {
    const texto = document.querySelector("#pergunta")

    const spinner = document.querySelector("#spinner")
     spinner.style.display = "block";

    const resposta = await connectApiChatGPT(pergunta.value);

    spinner.style.display = "none";

  console.log(resposta);
}

