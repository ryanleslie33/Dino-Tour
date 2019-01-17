import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DinoTour } from './dino-park.js';



$(document).ready(function() {
  let tour = new DinoTour

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
tour.visit();

$("#flavor-text").text(tour.flavorText).val();
});
$("#feed").click(function(event){
  event.preventDefault();
  setInterval(() => {
    if(tour.cod>=20){
      const species = "dinosuar";

      let request = new XMLHttpRequest();
      const url = `http://api.giphy.com/v1/gifs/search?q=${species}&api_key=${process.env.API_KEY}&limit=5`;
      request.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          const response = JSON.parse(this.responseText);
          getElements(response);
        }
      }
      request.open("GET", url, true);
      request.send();
      const getElements = function(response) {

        $('#giphy').html(`<img src="${response.data[2].images.fixed_height.url}">`);

      }
    }
  }, 1000);

  tour.feedDino();
  tour.tourCheck();
  tour.attack();
$("#flavor-text").text(tour.flavorText).val();
});


});
