var arr = [["R","G","G","B"], 
           ["B","O","G","G"], 
           ["P","O","B","P"], 
           ["Y","B","Y","O"]];



function myFunction(cell,direction){
    /*Тук целта е по даден параметър  селл да открием неговият предходен и следващ 
    елемент след което да ги разменим(параметърът селл и суап от тест.js)*/
    //let index = array.indexOf(cell);
    //console.log(index);
	
	    if (direction == 'Left') {
			var prev = array[1][2-1];		
			// 	//console.log(prev);
			// 	//console.log(array[1][2]);
			let swap = cell;
            cell = arr[1][1];
            arr[1][1] = swap;
            result.innerText = arr;
	    }

	     if (direction == 'Right') {
			var prev = arr[1][2+1];
			cell = arr[1][2]	
				// console.log(prev);
				// console.log(arr[1][2]);
			let swap = cell;
            cell = arr[1][3];
            arr[1][3] = swap;
            result.innerText = arr;
	    }
}

console.log(myFunction(arr[1][2],'Right'));
//console.log(array);


// var arr = ['R','G','G','B'];

// console.log(arr.indexOf(arr[]));


//Output the 2d array in table 
function addTable(dataArray) {
  var myTable = document.createElement('table');
  myTable.setAttribute("id",'table');
  
  document.body.appendChild(myTable);

  var y = document.createElement('tr');
  myTable.appendChild(y);

  for(var i = 0 ; i < dataArray.length ; i++) {
    var row= dataArray[i];
    var y2 = document.createElement('tr');
    for(var j = 0 ; j < row.length ; j++) {
      myTable.appendChild(y2);
      var th2 = document.createElement('td');
      var date2 = document.createTextNode(row[j]);
      th2.appendChild(date2);
      y2.appendChild(th2);
    }
  }
} //addTable

addTable(
         [["R","G","G","B"], 
           ["B","O","G","G"], 
           ["P","O","B","P"], 
           ["Y","B","Y","O"]]
);


        // var y = document.createElement('tr');
        // myTable.appendChild(y);


        //console.log(gameboard);

// function countCon(ar,n)
//     {
//         let cnt = 0;
       
//         for (let i = 0; i < n - 1; i++)
//         {
       
//             // If consecutive elements are same
//             if (ar[i] == ar[i + 1])
//                 cnt++;
//         }
//         return cnt;
//     }

// let arr = [["R","O","G","B"], 
//            ["B","G","G","G"], 
//            ["P","O","B","P"], 
//            ["Y","B","Y","O"]];

// let newArr = [];

//  for(var i = 0; i < arr.length; i++)
// {
//     newArr = newArr.concat(arr[i]);
// }



// let n = newArr.length;

// console.log(newArr);


// console.log(countCon(newArr,n));


// function consecutiveEl(array){
//           var maxSeq = 0;

//           for (var k = 0; k < array.length; k++) {
//               var counter = 1;
//               for(var z = k+2; z < array.length; z++){
//                   if(array[k] === array[z]){
//                       counter+=1;
//                   }
//                   else{
//                       break;
//                   }
//                   if(counter > maxSeq){
//                       maxSeq = counter;
//                   }

//               }
//           }
//   console.log(maxSeq);
// }

// consecutiveEl(newArr);