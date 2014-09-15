/* global Mustache */
(function (App, undefined) {
	'use strict';

	// Setup run on load
	(function(){

		// Get language by query parameter
		App.lang = getParameterByName('lang') || 'en';

		// Get App data
		var data = getData(App.lang);

		// Parse Mustache template and create markup
		var template = document.getElementById('template').innerHTML;
		Mustache.parse(template);
		document.getElementById('all').innerHTML = Mustache.render(template, data);

		// Set language as body class
		document.body.className = App.lang;

	}).call(this);


	// Pubic - Kill the current App state
	App.destroy = function() {};

	// Pubic - Set the default App state
	App.construct = function() {};

	// Pubic - Destroy the app only to create it again
	App.restart = function() {};


	// Utils
	function getData(language) {
		return { greet: 'hello world '+language };
	}

	function getParameterByName(name) {
	  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
	  results = regex.exec(location.search);
	  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
	}

	console.log('App', App);

})(window.App = window.App || {});