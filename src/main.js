// User interface logic
import { GalacticAge } from '../src/codeReview.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import "./animate.css";
import $ from "jquery";


$(document).ready(function () {
  let spaceAge = new GalacticAge;

  $("#enterAge").submit(function (event) {
    event.preventDefault();
    let inputtedAge = $("#age").val();
    let inputtedPlanet = $("#planets").val();
    let inputtedLe = $("#LE").val();

    
    
    
    $(".output").show();
  });
});