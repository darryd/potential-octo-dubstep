//bubble sort, it's shit
function bubbleSort (arr) {
	var len = arr.length();
	var swapped = true;

	while(swapped){
		swapped = false
		var i = 0;
		while(i < (len - 1)){
			if(arr[i - 1] > arr[i]){
				//swap
				var temp = arr[i]
				arr[i] = arr[i - 1]
				arr[i - 1] = temp
				swapped = true
			}
		}
	}
}