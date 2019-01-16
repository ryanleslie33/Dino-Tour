import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
$(".park").click(function(event){
  event.preventDefault();
  var xhr = new XMLHttpRequest();

  xhr.open('GET', 'http://dinoipsum.herokuapp.com/api/?format=html&words=1&paragraphs=1');
  xhr.onload = function() {
    if (this.status === 200) {
      document.querySelector('#dinosaur1').innerHTML = this.response;
    } else {
      console.log('Where did all the dinosaurs go?');
    }
  };
  xhr.send();
});
});
