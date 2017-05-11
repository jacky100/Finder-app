// tämä varmistaa, että HTML-elementit on ladattu
$(function() {
  
  // kokeile selaimessa: http://yelp-search.jelastic.metropolia.fi/?term=cafe&location=leppavaara,02650

  // 2. Yelp-haku
  function yelpSearch(term, location) {
    $.ajax({
        'url': 'http://yelp-search.jelastic.metropolia.fi/',
        'dataType': 'json',
        'data': {
            'term': term,
            'location': location,
        },
        'success': onYelpSearch,
    });
  }

  // 3. Data tulee palvelimelta takaisin
  function onYelpSearch(data) {
      console.log('JSON-tulokset: '+JSON.stringify(data));
      console.log('ensimmäisen elementin 1. categorian nimi: '+data[0].categories[0].alias); // coffee
      $('#result').empty();
      for(var entry of data) {
        $('#result').append('<p> Name: '+entry.name+'</p>'+'<p> Address: '+entry.location.address1+'</p>'+'<img src="'+entry.image_url+'"></img>'+'<p>________________________________________________________</p>')
      }
  }
  console.log('Page loaded, start executing javascript!');
  
  // 1. Tapahtumakuuntelijan asettaminen
  $('#searchButton').click(function() {
    console.log('button clicked');
    var term = $('#term').val();
    var location = $('#location').val();
    
    //yelpSearch('cafe', 'leppavaara, 02650');
    yelpSearch(term, location);
  });
  

});
