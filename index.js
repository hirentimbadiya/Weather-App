const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6836a16b94mshf12ba7377526a3ap150e72jsn58903efa9aed',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};

fetch('https://open-weather13.p.rapidapi.com/city/delhi', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));