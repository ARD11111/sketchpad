const container = document.getElementById("container");
container.setAttribute("style", "display:flex; flex-wrap:wrap; justify-content:center; margin:30px 20px; height:900px;");



for (let i = 0; i < 16; i++) {

  for (let j = 0; j < 16; j++) {
    let box = document.createElement("div");
    box.setAttribute("style", " width:calc(100%/16); height:calc(100%/16); aspect-ratio: 1/1; border: 2px solid blue; box-sizing:border-box;");
    box.innerHTML=`${j}`;
    // box.className="box";
    container.appendChild(box);


  
  }

}


container.addEventListener("mouseover", (e) => {
  if(e.target.tagName === "DIV" && e.target !== container ){
    e.target.style.backgroundColor="black";
  }
  
});
container.addEventListener("click", (e) => {
  if(e.target.tagName === "DIV" && e.target !== container ){
    e.target.style.backgroundColor="white";
  }
  
});