let grid = document.querySelector('.grid');
let gridSize = document.querySelector('input').value;
let gridValue = document.querySelector('.grid-size-text');
let defVal = 12;

createGrid(defVal);






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

console.log(grid.clientWidth/ gridSize);

grid.addEventListener("mouseover",function(e) {
    if(e.target.matches('.square')){
        e.target.classList.add("active");
    }});

/*
    gridSize.addEventListener("input", function (e) {
    gridSize = e.target.value;
    gridValue.textContent = `${gridSize}x${gridSize}`;
    console.log(gridSize);
    console.log(gridValue);
    });
*/
    gridSize.addEventListener('input', function (e) {
        squareSize = e.target.value;
        gridValue.textContent = `${squareSize}x${squareSize}`;
        console.log(gridSize);
        console.log(gridValue);
      });
      