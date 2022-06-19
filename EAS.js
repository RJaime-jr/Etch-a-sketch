let grid = document.querySelector('.grid');
let gridSize = document.querySelector('input');
let gridValue = document.querySelector('.grid-size-text');
let squareVal = 12;
let gridSelect = document.querySelector('button');
let resetButton = document.getElementById('reset');

//change colors
let curColor = document.getElementsByClassName('active');
let colorPick = document.getElementById('color-pick');
let colVal = document.getElementById('color-val');

createGrid(squareVal);



function reset() {
    while (grid.firstChild) {
      grid.removeChild(grid.lastChild);
    }
    createGrid(squareVal);
  }


function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
  
    return div;
  }
  



function createGrid(gridSize){
for(let i = 0; i<gridSize; i++){ 
    for(let j = 0; j<gridSize; j++){ 
        grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }  
}
}


grid.addEventListener("mouseover",function(e) {
    if(e.target.matches('.square')){
        e.target.classList.add("active");
    }
});


    gridSize.addEventListener("input", function (e) {
        squareVal = e.target.value;
        gridValue.textContent = `${squareVal}x${squareVal}`;
        console.log(gridSize);
        console.log(gridValue);
      });


      gridSelect.addEventListener('click', function(e){
        reset();

      });

      resetButton.addEventListener('click', function(e){
        reset();
      });

      colorPick.addEventListener('click', function(e){
        colVal = document.getElementById('color-val').value;
        document.getElementsByClassName('active').style.backgroundColor= colVal;

        

      });