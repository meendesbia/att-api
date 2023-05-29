function gerarNomeAleatorio() {
    $.ajax({
      url: "https://randomuser.me/api/",
      dataType: "json",
      success: function(data) {
        var nome = data.results[0].name.first + " " + data.results[0].name.last;
        $("#nomeAleatorio").text(nome);
      }
    });
  }