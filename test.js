let down = document.getElementsByTagName('button')[3];

down.addEventListener("click", function(){
  // (A) DUMMY ARRAY
  var arr = [['R','G','G','B'],
['B','O','G','G'],
['P','O','B','P'],
['Y','B','Y','O']];

  // (B) CREATE HTML TABLE OBJECT
  var perrow = 1; // 2 CELLS PER ROW
  var table = document.createElement("table");
  table.setAttribute('id','table');
  var row = table.insertRow();

  // LOOP THROUGH ARRAY AND ADD TABLE CELLS
  for (var i = 0; i < arr.length; i++) {
    // ADD "BASIC" CELL
    var cell = row.insertCell();
    cell.innerHTML = arr[i];

    // ATTACH A RUNNING NUMBER OR CUSTOM DATA
    cell.dataset.id = i;
 
    //ATTACH ONCLICK LISTENER IF REQUIRED
    cell.addEventListener("click", function(){
      console.log(this.dataset.id); 
    });

     // BREAK INTO NEXT ROW
    var next = i + 1;
    if (next%perrow==0 && next!=arr.length) {
      row = table.insertRow();
    }
  }

  // (C) ATTACH TABLE TO CONTAINER
  document.getElementById("container").appendChild(table);

let result = document.getElementById('result');


//С това ще сменяме местата на елементи в зависимост от посоката която е зададена 

var arr = [["R","G","G","B"], 
             ["B","O","G","G"], 
             ["P","O","B","P"], 
             ["Y","B","Y","O"]];

let swap = arr[0][1];
arr[0][1] = arr[1][1];
arr[1][1] = swap;
//result.innerHTML = arr;



});


// //Loop to initialize 2D array elements.




// console.log(find(i = 2));

// let cell = 6;

// let index = array.indexOf(cell,array[0]);

// if (index) {
//  var prev = array[index-1];
// }
// if (index){
//  var next = array[index+1];
// }

// console.log(next);

//console.log(index);
