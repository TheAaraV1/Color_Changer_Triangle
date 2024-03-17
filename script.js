let a = document.querySelector("#triangle");

a.addEventListener("mousemove", (details) => {
  let rectLoc = a.getBoundingClientRect();
  let mouseLoc = details.clientX;
  let loc = mouseLoc - rectLoc.left;

  

 if(loc < rectLoc.width/2)
  {
    a.style.backgroundColor = `rgb(${255},${rectLoc.width/2 - loc},${rectLoc.width/2 - loc})`;
  }
  
  else{
    a.style.backgroundColor = `rgb(${loc/2},${loc/2},${255})`;
  }

});

a.addEventListener("mouseleave",()=>{
  a.style.backgroundColor = "white";
})
