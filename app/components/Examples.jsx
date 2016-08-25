var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
	return(
			<div>
				<h1 className="text-center page-title">Examples </h1>
				<p>Here are a few example example locations</p>
				<ol>
					<li>
						<Link to='/?location=Philadelphia'>Philadelphia</Link>
					</li>

					<li>
						<Link to='/?location=Dominican Republic'> Dominican Republic</Link>
					</li>
				</ol>
			</div>
		)
}

module.exports = Examples;