var gameboard = [["R","G","G","B"], 
           ["B","O","G","G"], 
           ["P","O","B","P"], 
           ["Y","B","Y","O"]];

console.log('Hello');
function myFunction(cell,direction){
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
                document.body.appendChild(table);
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
                if (direction == 'Left') {
                //let prev = gameboard[i][j-1];
                let swap = gameboard[i][j];
                gameboard[i][j] = gameboard[i][j-1] ;
                gameboard[i][j-1] = swap;
              }

              });
              
              let upButton = document.getElementById('up');
              upButton.addEventListener('click',function(){
               if (direction == 'Up') {
                //let up = gameboard[i-1][j];
                let swap = gameboard[i][j];
                 gameboard[i][j] = gameboard[i-1][j];
                 gameboard[i-1][j] = swap;
              }
 
            });
              
            let rightButton = document.getElementById('right');
            rightButton.addEventListener('click',function(){
              //console.log(direction)
              if (direction == 'Right') {
                //let right = gameboard[i][j+1];
                let swap = gameboard[i][j];
                gameboard[i][j] = gameboard[i][j+1] ;
                gameboard[i][j+1] = swap;
              }
               
            });
              
            let downButton = document.getElementById('down');
            downButton.addEventListener('click',function(){
              if (direction == 'Down') {
                //let down = gameboard[i+1][j];
                let swap = gameboard[i][j];
                 gameboard[i][j] = gameboard[i+1][j];
                 gameboard[i+1][j] = swap;
                 console.log(swap);
                 console.log(gameboard[i][j]);
                 console.log(gameboard);
                 console.log(consecutiveEl(gameboard));
              }
            });

          //console.log(cntConsecutiveElements(gameboard));

          //console.log(gameboard.reduce((count, row) => count + row.length, 0));
          //console.log(count);
      }else{
        alert('The information is not given right!');
      }
}
myFunction([0,1],'Down');
//console.log(gameboard);

function countCon(ar,n)
    {
        let cnt = 0;
       
        for (let i = 0; i < n - 1; i++)
        {
       
            // If consecutive elements are same
            if (ar[i] == ar[i + 1])
                cnt++;
        }
        return cnt;
    }

let arr = [["R","G","G","B"], 
           ["B","O","G","G"], 
           ["P","O","B","P"], 
           ["Y","B","Y","O"]];

let newArr = [];

 for(var i = 0; i < arr.length; i++)
{
    newArr = newArr.concat(arr[i]);
}



let n = newArr.length;

console.log(newArr);


console.log(countCon(newArr,n));


function consecutiveEl(array){
          var maxSeq = 0;

          for (var k = 0; k < array.length; k++) {
              var counter = 1;
              for(var z = k+2; z < array.length; z++){
                  if(array[k] === array[z]){
                      counter+=1;
                  }
                  else{
                      break;
                  }
                  if(counter > maxSeq){
                      maxSeq = counter;
                  }

              }
          }
  console.log(maxSeq);
}

consecutiveEl(newArr);