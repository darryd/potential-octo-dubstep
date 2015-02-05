//bubble sort, it's shit
function bubbleSort(arr) {
	var len = arr.length;
	var swapped = true;
	console.log("Bubble sort test.");
	console.log("Array length.");
	console.log(len);
	console.log("Before:");
	console.log(arr.toString());
	while(swapped){
		swapped = false;
		var i = 0;
		while(i < len){
			if(arr[i - 1] > arr[i]){
				//swap
				console.log("swapping " + arr[i - 1] + " and " + arr[i]);
				var temp = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = temp;
				swapped = true;
			}
			i++;
		}
	}
	console.log("After:");
	console.log(arr.toString());
}

function optimalBubbleSort(arr) {
	var len = arr.length;
	var swapped = true;

	console.log("Optimal Bubble sort test.");
	console.log("Array length.");
	console.log(len);
	console.log("Before:");
	console.log(arr.toString());

	while(swapped){
		swapped = false;
		var i = 0;
		while(i < len){
			//swap
			console.log("swapping " + arr[i - 1] + " and " + arr[i]);
			var temp = arr[i];
			arr[i] = arr[i-1];
			arr[i-1] = temp;
			swapped = true;
		}
		i++;
		length--;
	}
	console.log("After:");
	console.log(arr.toString());
}