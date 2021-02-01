var dogs = new XMLHttpRequest();
// #2 Create a call back function
function sendAJAX() {
  dogs.onreadystatechange = function () {
    if (dogs.readyState === 4) {
      var image = JSON.parse(dogs.responseText);
      document.getElementById("pic1").src = image.message[0];
      document.getElementById("pic2").src = image.message[1];
      document.getElementById("pic3").src = image.message[2];
    }
  };
  dogs.open("GET", "https://dog.ceo/api/breeds/image/random/3");
  dogs.send();
}
