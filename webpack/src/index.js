import $ from 'jquery';
import '../assets/css/main.css';
import ElementBuilder from './element-builder';

function helloWorld() {
	
	var heading = ElementBuilder.createElement('h1');
	heading.innerHTML = 'Hello TypeScript';

	$('body').append(heading);
}

helloWorld();