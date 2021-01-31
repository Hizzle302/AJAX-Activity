// #1 Create an XMLHTTP Request Object

var dogs = new XMLHttpRequest();

// #2 Create a call back function

dogs.onreadystatechange = function() {
    if(dogs.readyState === 4) {
    var pic = JSON.parse(request.responseText);
     documentgetElementById('pic1').src = pic.message[0];
     documentgetElementById('pic2').src = pic.message[1];
     documentgetElementById('pic3').src = pic.message[2];   
    }

};
// Calling Button Function

function sendAJAX() {

// #3 Open a request using GET 

dogs.open('GET', 'https://dog.ceo/api/breeds/image/random');

// #4 Send request

dogs.send();
}
