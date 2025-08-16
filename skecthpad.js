const container = document.getElementById("container");
container.setAttribute("style", "display:flex; flex-wrap:wrap; justify-content:center; margin:30px 20px; height:800px;");

let noOfSquares = 16;
let box;
let color = "black";
// div creation loop

function createGrid(noOfSquares) {
  for (let i = 0; i < noOfSquares; i++) {

    for (let j = 0; j < noOfSquares; j++) {
      box = document.createElement("div");
      box.setAttribute("style", `width:calc(100%/ ${noOfSquares}); height:calc(100%/ ${noOfSquares}); aspect-ratio: 1/1;  box-sizing:border-box; `);
      box.className = "old";
      container.appendChild(box);

    }

  }

}
createGrid(noOfSquares); // create intial 16X16 grid

//remove old grid
function removeGrid(noOfSquares) {
  let temp = document.querySelectorAll(".old");
  temp.forEach(element => {
    element.remove();
  }

  );
}





// color of div
container.addEventListener("mouseover", (e) => {

  if (e.target.tagName === "DIV" && e.target !== container) {
    e.target.style.backgroundColor = color;
    e.target.style.cursor="crosshair";
    // e.target.style.opacity = 0.1;
    // let opacity = e.target.style.opacity;
    // console.log(opacity);
    // if (e.target.style.backgroundColor !== "white") {
    //   opacity += 0.1;
    // }

  }

});


const customize = document.querySelector("#customize");
customize.addEventListener("click", () => {
  removeGrid(noOfSquares);
  let newGrid = Number(prompt("Enter the no. of squares per side for the new grid (less than 100)", "16"));

  if (newGrid > 100) {
    newGrid = prompt("enter a number less than 100");
  }
  noOfSquares = Number(newGrid);
  createGrid(noOfSquares);
  color="black";
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  let temp = document.querySelectorAll(".old");
  temp.forEach(element => {
    element.style.backgroundColor = "white";
  }
  );


});



const colorPicker = document.getElementById("colorPicker");
function changeColor(e) {
  color = e.target.value;
  console.log(color);
}
console.log(colorPicker)
colorPicker.addEventListener("change", changeColor, false);

const erase = document.getElementById("erase");
erase.addEventListener("click", () => {
  color="white";
 
});
