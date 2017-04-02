$(document).ready(function() {

  var randomQuote;
  var randomCharacter;

  function getQuote(){
    $.ajax({
      url: 'https://got-quotes.herokuapp.com/quotes',
    })
    .done(function(reply) {
      randomQuote = reply.quote;
      randomCharacter = reply.character;
      $(".quote").text(randomQuote);
      $(".character").text("- " + randomCharacter);
    })
  }
  $("#tweet").on("click", function(){
    window.open("https://twitter.com/intent/tweet?text="+ randomQuote + "- " + randomCharacter);
  });
  
  $("#nextQuote").on("click", function(){
    event.preventDefault();
    getQuote();
  });

  
});