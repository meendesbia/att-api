$(document).ready(function() {
    $('#converter').click(function() {
      var valorDolar = parseFloat($('#valor-dolar').val());
      var moedaDestino = $('#moeda-destino').val();

      // Chamar a API de conversão de moeda
      $.ajax({
        url: 'https://api.exchangerate-api.com/v4/latest/USD',
        dataType: 'json',
        success: function(data) {
          var taxaConversao = data.rates[moedaDestino];
          var valorConvertido = valorDolar * taxaConversao;
          $('#valor-convertido').text(valorConvertido.toFixed(2) + ' ' + moedaDestino);
        }
      });
    });
  });