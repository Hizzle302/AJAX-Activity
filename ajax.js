var dogs = new XMLHttpRequest();
dogs.onreadystatechange = function() {
    if(dogs.readyState === 4) {
     documentgetElementById('ajax').innerHtml = dogs.responseText;   
    }

}
dogs.open('GET', 'https://dog.ceo/api/breeds/image/random')
dogs.send();
