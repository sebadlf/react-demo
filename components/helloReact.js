var React = require('react');

module.exports = React.createClass ({

	getInitialState: function() {
		return {
			counter: 1
		}
	},
	componentDidMount: function(){
		setInterval(function(){ 
			this.setState({
				counter: this.state.counter + 1
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