// var gameboard = [["R","G","G","B"], 
//            ["B","O","G","G"], 
//            ["P","O","B","P"], 
//            ["Y","B","Y","O"]];
//function myFunction(cell,direction){



          function getCell(gameboard, i, z,direction) {
            // Directions are clockwise
            for(var i = 0; i < gameboard.length; i++) {
                for(var z = 0; z < gameboard.length; z++) {
                }
            }
            if (direction == 'Left') {
              return getCell(gameboard, i,   z-1);
            }
          }
           //cell = [y,x];
            console.log(getCell([["R","G","G","B"], 
           ["B","O","G","G"], 
           ["P","O","B","P"], 
           ["Y","B","Y","O"]],2,3,'Left'));

        // if (direction == 'Left') {

            
        //   for(var i = 0; i < gameboard.length; i++) {
        //         for(var z = 0; z < gameboard.length; z++) {
        //           //console.log(arr1[z][i]);
        //           cell = gameboard[i][z];

        //            //console.log(cell);
        //           //console.log(cell);
        //         }
        //       }

        // }

        //  if (direction == 'Right') {
        
        // }
//}

//myFunction([2,3],'Left');



//const arrayColumn = (arr, n) => arr.map(x => x[n]);

// function getCol(matrix, col){
//        var column = [];
//        for(var i=0; i<matrix.length; i++){
//           column.push(matrix[i][col]);
//        }
//        return column; // return column data..
//     }

//  let arr1 = [["R","G","G","B"], 
//             ["B","O","G","G"], 
//             ["P","O","B","P"], 
//             ["Y","B","Y","O"]];

// // console.log(arrayColumn(arr1,0));


// for(var i = 0; i < arr1.length; i++) {
//   for(var z = 0; z < arr1.length; z++) {
//     console.log(arr1[z][i]);
//   }
// }

// let a = [["R","G","G","B"], 
//             ["B","O","G","G"], 
//             ["P","O","B","P"], 
//             ["Y","B","Y","O"]];

// [a[0], a[1]] = [a[1], a[0]]

// console.log(a);


