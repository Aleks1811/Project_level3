var gameboard = [["R","G","G","B"], 
           ["B","O","G","G"], 
           ["P","O","B","P"], 
           ["Y","B","Y","O"]];

console.log('Hello');
function myFunction(cell,direction){

                // let i = cell[0];
                // let j = cell[1];
                //cell = gameboard[i][j];
               //element = [];
               //console.log(cell);
              for(let i = 0; i < gameboard.length; i++) {
                for(let j = 0; j < gameboard.length; j++) {
                      
                     i = cell[0];
                     j = cell[1];
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

                }
              }

              //[i,j];


              if (direction == 'Left') {

                // let swap = cell;
                // cell = prev
                // prev = swap;
                // /console.log(cell);

              }

}
myFunction([1,1],'Left');
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