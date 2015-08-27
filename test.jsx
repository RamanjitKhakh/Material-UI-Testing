
var React = require('react')


var mui = require('material-ui');

var RaisedButton = mui.RaisedButton;
var DropDownMenu = mui.DropDownMenu;
var menuItems = [
   { payload: '1', text: 'Never' },
   { payload: '2', text: 'Every Night' },
   { payload: '3', text: 'Weeknights' },
   { payload: '4', text: 'Weekends' },
   { payload: '5', text: 'Weekly' },
];


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
		
		
		return (
				<div>
					<Paper 
						Depth={1}
						style = {{
							width: '100%',
							height: '500px'
						}}>
						<div >hello</div>
						<RaisedButton 
						label="Default"
						onClick={this.changeTheme}
						style={{
							width: '250px',
							borderRadius: '5px',
							backgroundColor: 'green',

						} }

						primary={true}/>
						<DropDownMenu 
						primary={true}
						menuItems={menuItems}
						menuItemStyle={{width: '500px'}} />
					</Paper>

				</div>
				//having primary set to true allows the inner button to 
				//inherit the background color of the entire component
			);
	}

});

module.exports = TestComponent;