var array = [["R","G","G","B"], 
             ["B","O","G","G"], 
             ["P","O","B","P"], 
             ["Y","B","Y","O"]];

// let findIndex = array[2][2];
// console.log(findIndex);

// let findIndexPrev = array[2][2]-1;
// console.log(findIndexPrev);

// let split = array.join(',');
// console.log(split);

//console.log(arr);

result.innerText = array;

//console.log(array);

function myFunction(direction){
	  // console.log(array.indexOf(cell))
	  // console.log(cell);
	  //console.log(array[cell][cell-1]);
    
    /*Тук целта е по даден параметър  селл да открием неговият предходен и следващ 
    елемент след което да ги разменим(параметърът селл и суап от тест.js)*/
    //let index = array.indexOf(cell);
    //console.log(index);
	
	    if (direction == 'Left') {
				var prev = array[1][2-1];		
				console.log(prev);
				console.log(array[1][2]);
				let swap = array[1][2];
        array[1][2] = prev;
        prev = swap;
        ;

   result.innerText = array;
	}
}

myFunction('Left');
//console.log(array);


// var arr = ['R','G','G','B'];

// console.log(arr.indexOf(arr[]));


