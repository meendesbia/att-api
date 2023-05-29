$(document).ready(function() {
    $('#btnGetDogImage').click(function() {
      $.ajax({
        url: 'https://dog.ceo/api/breeds/image/random',
        method: 'GET',
        success: function(data) {
          $('#dogImage').attr('src', data.message);
        }
      });
    });
});