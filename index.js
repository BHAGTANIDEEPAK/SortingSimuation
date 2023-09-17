let title = document.querySelector(".demo");
let name = "Sorting Simulation ";
let index = 1;

function typewriter() {
  let new_title = name.slice(0, index);
  title.innerText = new_title;

  index > name.length ? (index = 1) : index++;

  setTimeout(() => typewriter(), 200);
}

typewriter();

$("button").click(function () {
  $("button")
    .animate({ opacity: 0.5 })
    .animate({ opacity: 1 })
    .css("color", "#d17f3f");
  $(".home").css("color", "#d17f3f");
});
