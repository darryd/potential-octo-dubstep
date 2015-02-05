//insertion sort, it's okay
function insertionSort(arr){
	var i = i;
	console.log("Insertion sort test.");
	console.log("Array length.");
	console.log(arr.length);
	console.log("Before:");
	console.log(arr.toString());
	while(i < arr.length - 1){
		var j = i;
		while(j > 0 && arr[j - 1] > arr[j]){
			console.log("swapping " + arr[i - 1] + " and " + arr[i]);
			temp = arr[j - 1];
			arr[j - 1] = arr [j];
			arr[j] = temp;
			j--;
		}
	}
	console.log("After:");
	console.log(arr.toString());
}

//reduces time by eliminating a few assignments
function optimalInsertionSort(arr){
	var i = 1;
	console.log("Insertion sort test.");
	console.log("Array length.");
	console.log(arr.length);
	console.log("Before:");
	console.log(arr.toString());
	while(i < arr.length - 1){
		var x = arr[i];
		var j = i;
		while(j > 0 && arr[j - 1] > arr[j]){
			console.log("swapping " + arr[i - 1] + " and " + arr[i]);
			arr[j] = arr[j - 1];
			j--;
		}
		arr[j] = x;
	}
	console.log("After:");
	console.log(arr.toString());
}