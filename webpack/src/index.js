import $ from 'jquery';
import '../assets/css/main.css';

function helloWorld() {
	
	var heading = document.createElement('h1');
	heading.innerHTML = 'Hello Webpack';

	$('body').append(heading);
}

helloWorld();