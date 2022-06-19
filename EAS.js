let grid = document.querySelector('.grid');
let gridSize = 12;






function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
  
    return div;
  }
  




for(let i = 0; i<gridSize; i++){ 
    for(let j = 0; j<gridSize; j++){ 
        grid.appendChild(createDiv(grid.clientWidth / gridSize));
    }  
}

console.log(grid.clientWidth/ gridSize);

grid.addEventListener("mouseover",function(e){
    if(e.target.matches('.square')){
        e.target.classList.add("active");
    }

});