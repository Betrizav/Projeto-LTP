async function connectApiChatGPT(pergunta) {
    const apiKey = "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";
    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Accept: "Application/json",
          "Content-Type": "Application/json",
          Authorization: `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          "messages": [{ "role": "user", "content": pergunta }],
          "temperature": 0.7
        }),
      });
      const responseFormat = await response.json();
      console.log(responseFormat);
      const resposta = await responseFormat.choices[0].message.content;
      return resposta;
 
    } catch (err) {
      return "Ocorreu um erro na operação";
    }
  }
