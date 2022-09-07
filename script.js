const calculateTemp = () => {

	const numberTemp = document.getElementById("temp").value;
	// console.log(numberTemp);
	const tempSelected = document.getElementById('temp_diff');

	const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
	console.log(valueTemp);
	
	const celToFah=(cel)=>{
		let fehrenheit = Math.round( (cel * 9/5) + 32);
		return fehrenheit;
	}
	const fehToCel=(fehr)=>{
		let celsius = Math.round( (fehr-32 ) * 5/9);
		return celsius;
	}

	let result;

	if(valueTemp=='cel'){
		result = celToFah(numberTemp);
		document.getElementById('resultContainer').innerHTML = `= ${result}Fahernheiht`;
	}
	else{
		result = fehToCel(numberTemp);
		document.getElementById('resultContainer').innerHTML = `= ${result}Celsius`;
	}
}