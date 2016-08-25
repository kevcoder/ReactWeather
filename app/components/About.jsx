var React = require('react');



var About = (props) => {
	return (
		<div>
			<h1 className="text=centered">About</h1>
			<p>React Weather is an application built with React.js</p>
			<p>Some of the tools I used include:</p>
			<ol>
				<li>
					<p>React a <a href="http://facebook.github.io/react/">Javascript framework.</a></p>
				</li>
				
				<li>
					<p><a href="http://openweathermap.org/api">Open Weather Map Api</a> in order to search for weather data by city name.</p>
				</li>

				<li>
					<a href="http://foundation.zurb.com/">Foundation</a> a css framework in order to style the application and make it resposive across multiple devices. 
				</li>
			</ol>
		</div>
	)
};

module.exports = About;

