// User interface logic
import { GalacticAge } from '../src/codeReview.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function () {
  let spaceAge = new GalacticAge;

  $("#enterAge").submit(function (event) {
    event.preventDefault();
    let inputtedAge = $("#age").val();
    let inputtedPlanet = $("#planets").val();
    let inputtedLe = $("#LE").val();

    if (inputtedPlanet === "Mercury") {
      return spaceAge.mercuryCal(inputtedAge);
    } else if (inputtedPlanet === "Venus") {
      return spaceAge.venusCalc(inputtedAge);
    } else if (inputtedPlanet === "Mars") {
      return spaceAge.marsCalc(inputtedAge);
    } else {
      return spaceAge.jupiterCalc(inputtedAge);
    }
    
    $(".output").show();
  });
});