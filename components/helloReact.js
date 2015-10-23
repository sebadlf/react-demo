var React = require('react');

var HelloComp = React.createClass ({

	getInitialState: function() {
		return {
			counter: 1
		}
	},
	componentDidMount: function(){
		var self = this;
		setInterval(function(){
			self.setState({
				counter: self.state.counter + 1
			});
		}, 1000);

		console.log('mounted');
	},
	render() {
		return (
			<div>
				Hello World -
				{ this.state.counter }
			</div>
		);
	}
});

module.exports = HelloComp;