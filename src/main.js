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
    let inputtedAge = $("#age");
    let inputtedPlanet = $("#planets")
    let inputtedLe = $("#LE")
    $(".output").show();
  })
})