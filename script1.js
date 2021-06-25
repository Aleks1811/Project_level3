var gameboard = [["R","G","G","B"], 
           ["B","O","G","G"], 
           ["P","O","B","P"], 
           ["Y","B","Y","O"]];

console.log('Hello');
function myFunction(cell,direction){
  //console.log(gameboard);
              function createTable(tableData) {
                var table = document.createElement('table');
                var tableBody = document.createElement('tbody');
                table.style.border = "3px solid black";
                
                
                tableData.forEach(function(rowData) {
                  var row = document.createElement('tr');

                  rowData.forEach(function(cellData) {
                    var cell = document.createElement('td');
                    cell.appendChild(document.createTextNode(cellData));
                    row.appendChild(cell);
                    if (cell.innerText == 'R') {
                      cell.style.color = "red";

                    }
                    if (cell.innerText == 'B') {
                      cell.style.color = "blue";

                    }
                    if (cell.innerText == 'G') {
                      cell.style.color = "green";

                    }
                    if (cell.innerText == 'Y') {
                      cell.style.color = "#C1BF0C";

                    }
                    if (cell.innerText == 'O') {
                      cell.style.color = "orange";

                    }
                    if (cell.innerText == 'P') {
                      cell.style.color = "purple";

                    }
                  });

                  tableBody.appendChild(row);
                });

                table.appendChild(tableBody);
                document.body.appendChild(table);
                $('table').attr('id','tableDesigne');
              }



createTable(gameboard);
                
               
              //[i,j];
              var i = cell[0];
              var j = cell[1];

              //gameboard = gameboard.toString();
              //!ВАЖНО
              //var element = gameboard[i][j];
              //console.log(gameboard);
      if ((cell.length = 2) && (i < gameboard.length) && (j < gameboard[0].length)) {
              if (direction == 'Left') {
                //let string = gameboard.toString();
                //let prev = gameboard[i][j-1];
                let swap = gameboard[i][j];
                gameboard[i][j] = gameboard[i][j-1] ;
                 gameboard[i][j-1] = swap;
                // console.log(swap);
                // console.log(gameboard[i][j]);
                // console.log(gameboard);
                // createTable(gameboard);


              }
              if (direction == 'Up') {
                let up = gameboard[i-1][j];
                let swap = element;
                 element = up;
                 up = swap;
                 console.log(swap);
                 console.log(element);
                 //console.log(gameboard);
              }

            let rightButton = document.getElementById('right');
            rightButton.addEventListener('click',function(){
              //console.log(direction)
              if (direction == 'Right') {
                //console.log(element, 'el')
                // console.log(right)
                // console.log(swap)
                //let string = gameboard.toString();
                // console.log(gameboard);
                //let right = gameboard[i][j+1];
                let swap = gameboard[i][j];
                // console.log(right, 'right')
                // console.log(swap, 'swap')
                  gameboard[i][j] = gameboard[i][j+1] ;
                  gameboard[i][j+1] = swap;
                  //let newGameboard = gameboard;
                console.log(gameboard[i][j+1], 'right');
                console.log(gameboard[i][j], 'el');
                console.log(gameboard);
                //createTable(newGameboard);

              }
               
            });

              if (direction == 'Down') {
                let down = gameboard[i+1][j];
                let swap = element;
                 element = down;
                 down = swap;
                 console.log(swap);
                 console.log(element);
                 console.log(gameboard);
              }
      }else{
        alert('The information is not given right!');
      }
}
myFunction([2,1],'Right');
console.log(gameboard);
let arr =  
           [["R","G","G","B"], 
           ["B","O","G","G"], 
           ["P","O","B","P"], 
           ["Y","B","Y","O"]];