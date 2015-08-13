
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
					<RaisedButton label="Default"
					style={{
						width: '250px',
						borderRadius: '5px',
						backgroundColor: '#FF4081',

					} }

					primary={true}/>

				</div>
				//having primary set to true allows the inner button to 
				//inherit the background color of the entire component
			);
	}

});

module.exports = TestComponent;