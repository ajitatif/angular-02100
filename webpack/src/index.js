function helloWorld() {
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Hello World';

	document.body.appendChild(heading);
}

helloWorld();