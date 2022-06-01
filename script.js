const methodStorer = (()=>{ 
  const getItems = () => {
    let items = document.querySelectorAll(".grid_item");
    return items;
  };
  const cleaning = () => {
    getItems().forEach((item) => {
      item.style.backgroundColor ='white';
      item.bool = false;
    });
  };
  const deleteGrid = () => {
    getItems().forEach((item)=>item.remove());
  }
  const makeRows = (rows,cols) => {
    document.querySelector("#gridContainer").style.setProperty('--grid-rows', rows);
    document.querySelector("#gridContainer").style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.bool = false;
      cell.addEventListener('mouseenter',fillGrid);
      document.querySelector("#gridContainer").appendChild(cell).className = "grid_item";
  };
  };
  const fillGrid = (e) => {
    if (e.target.bool==true ){
      escurecer(e);
    } else {
      e.target.style.backgroundColor = colorPicker.value;
      e.target.bool = true;
  };
  };
  const darken = (e) => {
    let variavel;
    variavel = window.getComputedStyle(e.target).getPropertyValue('background-color');
    variavel = variavel.replace(/[^\d,]/g, '').split(',');
    variavel[2] = variavel[2]*0.9;
    variavel[1] = variavel[1]*0.9;
    variavel[0] = variavel[0]*0.9;
    variavel[2] = parseInt(variavel[2]);
    variavel[0] = parseInt(variavel[0]);
    variavel[1] = parseInt(variavel[1]);
    e.target.style.backgroundColor = `rgb(${variavel[0]}, ${variavel[1]},${variavel[2]})`;
  }

  return {getItems,cleaning,deleteGrid,makeRows}
})();

/*function myFunction(e) {
  if (e.target.bool==true ){
    escurecer(e);
  } else {
    e.target.style.backgroundColor = colorPicker.value;
    e.target.bool = true;
}
} */




/*function makeRows(rows, cols) {
  document.querySelector("#gridContainer").style.setProperty('--grid-rows', rows);
  document.querySelector("#gridContainer").style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.bool = false;
    cell.addEventListener('mouseenter',myFunction);
    document.querySelector("#gridContainer").appendChild(cell).className = "grid_item";
  };
}; */



reset.addEventListener('click',methodStorer.cleaning);


const numberGrid = document.querySelector("#numberGrid");
const output = document.querySelector(".numberGrid-output");
output.textContent = `${numberGrid.value} x ${numberGrid.value}`;
const pen = document.querySelector(".pen");
pen.style.color = colorPicker.value;
 
colorPicker.addEventListener("input",()=>{
  pen.style.color = colorPicker.value;
  let abc = document.querySelectorAll(".grid_item");
  abc.forEach((element)=>{element.bool = false;});
})

numberGrid.addEventListener('input',()=>{
  output.textContent = `${numberGrid.value} x  ${numberGrid.value}`;
})

numberGrid.addEventListener("click",()=>{
  deletar();
  methodStorer.makeRows(numberGrid.value,numberGrid.value)
  let abc = document.querySelectorAll(".grid_item");
  abc.forEach((element)=>{element.bool = false;});
})



let rgb;




function cleaning() {
  let cellList = document.querySelectorAll('.grid_item');
  cellList.forEach((grid_item) => {
    grid_item.style.backgroundColor ='white';
    grid_item.bool = false;}
  );
  
}

function deletar() {
  let cellList = document.querySelectorAll('.grid_item');
  cellList.forEach((grid_item)=>{grid_item.remove()} )
}

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}




function escurecer(e) {
  let variavel;
  variavel = window.getComputedStyle(e.target).getPropertyValue('background-color');
  variavel = variavel.replace(/[^\d,]/g, '').split(',');
  variavel.forEach((element)=>{
    element = element*0.9;
    element = parseInt(element);
  })
  /*variavel[2] = variavel[2]*0.9;
  variavel[1] = variavel[1]*0.9
  variavel[0] = variavel[0]*0.9
  variavel[2] = parseInt(variavel[2]);
  variavel[0] = parseInt(variavel[0]);
  variavel[1] = parseInt(variavel[1]); */
  e.target.style.backgroundColor = `rgb(${variavel[0]}, ${variavel[1]},${variavel[2]})`;
}

methodStorer.makeRows(numberGrid.value,numberGrid.value);
let abc = document.querySelectorAll(".grid_item");

function testando() {
  let array = [10,12,14];
  array.forEach((element)=>{this.element*0.9});
  return array;
}