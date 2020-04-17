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
    export let inputtedAge = $("#age").val();
    export let inputtedPlanet = $("#planets").val();
    export let inputtedLe = $("#LE").val();

    let planetInfo = ("your age on" + inputtedPlanet + is + spaceAge )
    
    
    $(".output").show();
  });
});