function gerarImagem() {
    axios.get('https://api.thecatapi.com/v1/images/search')
      .then(function (response) {
        var imagem = document.getElementById('imagemGato');
        imagem.src = response.data[0].url;
      })
      .catch(function (error) {
        console.log(error);
      });
}