$(document).ready(function() {
  $('form').submit(function(e){
    e.preventDefault();
    $('input').attr('disabled', 'disabled');
    $('#message').text('Tweet is being processed...');
    $.ajax({
      url: "/tweets",
      type: 'post',
      data: {tweet: $('#tweet-input').val()}
    }).done(function(response){
      $('#message').text('Tweet has been sent!');
      $('input').removeAttr('disabled');
    });
  });
  
});