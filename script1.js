var gameboard = [["R","G","G","B"], 
           ["B","O","G","G"], 
           ["P","O","B","P"], 
           ["Y","B","Y","O"]];

console.log('Hello');
function myFunction(cell,direction){
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
                  });

                  tableBody.appendChild(row);
                });

                table.appendChild(tableBody);
                document.body.appendChild(table);
                $('table').attr('id','tableDesigne');
              }

createTable(gameboard);
                
                //console.log(element);
                //let prev = gameboard[i][j-1];
                //console.log(prev);
                //cell = gameboard[i][j];
               //element = [];
                  

               //console.log(cell);
                //element.push(i,j);
                
                //cell = gameboard[i][j];
                // cell =[];
                // cell.push(i,j);
                //console.log(cell);
               // prev = gameboard[i][z-1];
               // next = gameboard[i][z+1];
               //console.log(gameboard[i][z]);
               //console.log(cell);   

               //console.log(gameboard);
              for(let i = 0; i < gameboard.length; i++) {
                for(let j = 0; j < gameboard.length; j++) {
                   

                }
              }

              //[i,j];
              var i = cell[0];
              var j = cell[1];

              //gameboard = gameboard.toString();

              var element = gameboard[i][j];
              console.log(gameboard);

              if (direction == 'Left') {
                //let string = gameboard.toString();
                let prev = gameboard[i][j-1];
                let swap = element;
                 element = prev;
                 prev = swap;
                console.log(swap);
                console.log(element);
                //console.log(gameboard);


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

              if (direction == 'Right') {
                //let string = gameboard.toString();
                let right = gameboard[i][j+1];
                let swap = element;
                  element = right;
                  right = swap;
                console.log(swap);
                console.log(element);
                console.log(gameboard);


              }
              if (direction == 'Down') {
                let down = gameboard[i+1][j];
                let swap = element;
                 element = down;
                 down = swap;
                 console.log(swap);
                 console.log(element);
                 //console.log(gameboard);
              }

}
myFunction([2,2],'Right');
//console.log(gameboard);

// function getCordinates(gameboard,cell){
//           for(var i = 0; i < gameboard.length; i++) {
//                 for(var j = 0; j < gameboard.length; j++) {
//                       arr = [];
//                       arr.push(i,j);
//                      //arr = gameboard[i][j];
                     
//                 }
//               }
          
// console.log(arr); 
// }
// getCordinates([["R","G","G","B"], 
//            ["B","O","G","G"], 
//            ["P","O","B","P"], 
//            ["Y","B","Y","O"]],2,3);



var arr = [["R","G","G","B"], 
             ["B","O","G","G"], 
             ["P","O","B","P"], 
             ["Y","B","Y","O"]];

console.log(arr);

let swap = arr[0][1];
arr[0][1] = arr[1][1];
arr[1][1] = swap;

console.log(arr);