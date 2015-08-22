
var React = require('react')


var mui = require('material-ui');

var RaisedButton = mui.RaisedButton;
var Paper = mui.Paper;
var ThemeManager = new mui.Styles.ThemeManager();
ThemeManager.setTheme(ThemeManager.types.DARK);
 

var TestComponent = React.createClass({

	getInitialState: function(){

		return {
			
			isDark: true
		};
	},

	//required 
	childContextTypes:{

		muiTheme: React.PropTypes.object
	},
	

	changeTheme: function(){
		if(this.state.isDark){
			ThemeManager.setTheme(ThemeManager.types.LIGHT);
		}else{
			ThemeManager.setTheme(ThemeManager.types.DARK);
		}
		this.setState({isDark: !this.state.isDark});
	},
	//required
	getChildContext: function() {
	    return {
	      muiTheme: ThemeManager.getCurrentTheme()
	    };
  	},

	render: function(){
		console.log("workings?")
		
		return (
				<div>
					<Paper 
						Depth={1}
						style = {{
							width: '100%',
							height: '500px'
						}}>
						<div>hello</div>
						<RaisedButton 
						label="Default"
						onClick={this.changeTheme}
						style={{
							width: '250px',
							borderRadius: '5px',
							backgroundColor: '#FF4081',

						} }

						primary={true}/>

					</Paper>
				</div>
				//having primary set to true allows the inner button to 
				//inherit the background color of the entire component
			);
	}

});

module.exports = TestComponent;