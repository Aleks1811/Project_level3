// var arr = [["R","G","G","B"], 
//            ["B","O","G","G"], 
//            ["P","O","B","P"], 
//            ["Y","B","Y","O"]];
function myFunction(gameboard,cell,direction){
        

        // let arr = [];
        // arr.push(cell);

        // let tryTo = [arr];
        // console.log(tryTo)
        var myTable = document.createElement('table');
        myTable.setAttribute("id",'table');
        
        document.body.appendChild(myTable);

        let td = document.getElementsByTagName('td');
        //console.log(td);
        //td.innerText.style = "red";
        //td.setAttribute('class','row');
        //td.innerText.style

        for(var i = 0 ; i < gameboard.length ; i++) {
          var cell= gameboard[i];
          var y2 = document.createElement('tr');
          for(var j = 0 ; j < cell.length ; j++) {
            myTable.appendChild(y2);
            var th2 = document.createElement('td');
            var date2 = document.createTextNode(cell[j]);
            th2.appendChild(date2);
            y2.appendChild(th2);
          }
        }

            //console.log(slice);

        if (direction == 'Left') {
            //cell = gameboard[arr];
            // let arr1 = []
            // let push = arr1.push(cell);

            console.log(cell);
            
            //console.log(arr);
            //shift,unshift,pop
            // let add = gameboard.unshift(cell);
            // let find = gameboard.indexOf(cell);

            //console.log(find);
            //console.log(gameboard);

        }

         if (direction == 'Right') {
        
        }
}

myFunction([["R","G","G","B"], 
           ["B","O","G","G"], 
           ["P","O","B","P"], 
           ["Y","B","Y","O"]],[1][1],'Left');

//const arrayColumn = (arr, n) => arr.map(x => x[n]);

// function getCol(matrix, col){
//        var column = [];
//        for(var i=0; i<matrix.length; i++){
//           column.push(matrix[i][col]);
//        }
//        return column; // return column data..
//     }

 let arr1 = [["R","G","G","B"], 
            ["B","O","G","G"], 
            ["P","O","B","P"], 
            ["Y","B","Y","O"]];

// console.log(arrayColumn(arr1,0));


for(var i = 0; i < arr1.length; i++) {
  for(var z = 0; z < arr1.length; z++) {
    console.log(arr1[z][i]);
  }
}
