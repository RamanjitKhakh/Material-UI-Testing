
var React = require('react')


var mui = require('material-ui');

var RaisedButton = mui.RaisedButton;

var ThemeManager = new mui.Styles.ThemeManager();

var TestComponent = React.createClass({

	getInitialState: function(){

		return {
			

		};
	},

	//required 
	childContextTypes:{

		muiTheme: React.PropTypes.object
	},
	
	//required
	getChildContext: function() {
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
  	},

	render: function(){
		console.log("working?")
		return (
				<div>
					<div>hello</div>
					<RaisedButton label="Default"/>
				</div>
			);
	}

});

module.exports = TestComponent;