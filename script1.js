var gameboard =[["R","G","G","B"],
                ["B","O","G","G"],
                ["P","O","B","P"],
                ["Y","B","Y","O"]];

console.log('Hello');
function myFunction(cell){
  console.log(gameboard);
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
                document.querySelector('.table').appendChild(table);
                $('table').attr('id','tableDesigne');
              }

createTable(gameboard);
                 
              //[i,j];
              var i = cell[0];
              var j = cell[1];

              //var element = gameboard[i][j];
              //console.log(gameboard);
      if ((cell.length = 2) && (i < gameboard.length) && (j < gameboard[0].length)) {

              let leftButton = document.getElementById('left')
              leftButton.addEventListener('click',function(){
                //if (direction == 'Left') {
                //let prev = gameboard[i][j-1];
                let swap = gameboard[i][j];
                gameboard[i][j] = gameboard[i][j-1] ;
                gameboard[i][j-1] = swap;
                 console.log(swap);
                 console.log(gameboard[i][j]);
                 console.log(gameboard);
                 createTable(gameboard);
                 console.log(consecutiveIdEl());

                  let newGame = document.getElementById('new_game')
                 newGame.style.display = 'block';

              //}

              });
              
              let upButton = document.getElementById('up');
              upButton.addEventListener('click',function(){
               //if (direction == 'Up') {
                //let up = gameboard[i-1][j];
                let swap = gameboard[i][j];
                 gameboard[i][j] = gameboard[i-1][j];
                 gameboard[i-1][j] = swap;
                 console.log(swap);
                 console.log(gameboard[i][j]);
                 console.log(gameboard);
                 createTable(gameboard);
                 console.log(consecutiveIdEl());

                  let newGame = document.getElementById('new_game')
                 newGame.style.display = 'block';
              //}
 
            });
              
            let rightButton = document.getElementById('right');
            rightButton.addEventListener('click',function(){
              //console.log(direction)
              //if (direction == 'Right') {
                //let right = gameboard[i][j+1];
                let swap = gameboard[i][j];
                gameboard[i][j] = gameboard[i][j+1] ;
                gameboard[i][j+1] = swap;
                console.log(swap);
                 console.log(gameboard[i][j]);
                 console.log(gameboard);
                 createTable(gameboard);
                 console.log(consecutiveIdEl());

                 let newGame = document.getElementById('new_game')
                 newGame.style.display = 'block';
              //}
               
            });
              
            let downButton = document.getElementById('down');
            downButton.addEventListener('click',function(){
              //if (direction == 'Down') {
                //let down = gameboard[i+1][j];
                let swap = gameboard[i][j];
                 gameboard[i][j] = gameboard[i+1][j];
                 gameboard[i+1][j] = swap;
                 console.log(swap);
                 console.log(gameboard[i][j]);
                 console.log(gameboard);
                 createTable(gameboard);
                 consecutiveIdEl();

                 let newGame = document.getElementById('new_game')
                 newGame.style.display = 'block';
              //}
            });

        function consecutiveIdEl(){
            for (var y=0; y<gameboard.length; y++){
              for (var x=0; x< gameboard[y].length; x++){
                  var matchesRows = 0,
                  matchesColumns = 0,
                      testing = gameboard[y][x];
                      //console.log(cell);
                  // test left
                  if (gameboard[y][x-1] === testing) {matchesRows++};
                  // test right
                  if (gameboard[y][x+1] === testing) {matchesRows++}; 
                  // test above
                  if (y>0 && gameboard[y-1][x] === testing) {matchesColumns++}; 
                  // test below
                  if ((y<gameboard.length-1) && gameboard[y+1][x] === testing) {matchesColumns++}; 

                  
                  
                  if (matchesRows>=2){
                      //return true;
                     console.log('True');
                     console.log(matchesRows);
                     let result = document.getElementById('result');
            result.innerText = 'There are 3 or more same consecutive colors at a row or at a column!';
            result.style.color = 'green';

                  }

                  if (matchesColumns>=2){
                      //return true;
                     console.log('True');
                     console.log(matchesColumns);
                     let result = document.getElementById('result');
            result.innerText = 'There are 3 or more same consecutive colors at a row or at a column!';
            result.style.color = 'green';
                  }
              }
              
        }
}

      }else{
        alert('The information is not given right!');
      }
}
myFunction([0,1]);