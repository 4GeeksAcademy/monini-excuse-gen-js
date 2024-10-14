/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["Diva mi perra", "Mi abuela", "Hitler", "Shrek"];
  let action = ["asesinó", "se comió", "cocinó", "desapareció"];
  let what = [
    "a mi vecina fastidiosa",
    "a los judíos",
    "a los Back Street Boys",
    "a Popeye el Marino"
  ];
  let where = [
    "en la clase de meditación Zen",
    "en un restaurante Michelín",
    "en una tienda de peluches",
    "en un concurso de disfraces de payasos"
  ];

  let RandomWho = Math.floor(Math.random() * who.length);
  let RandomAction = Math.floor(Math.random() * action.length);
  let RandomWhat = Math.floor(Math.random() * what.length);
  let RandomWhere = Math.floor(Math.random() * where.length);

  document.querySelector("#excuse").innerHTML =
    who[RandomWho] +
    " " +
    action[RandomAction] +
    " " +
    what[RandomWhat] +
    " " +
    where[RandomWhere];
};
