import Users_frame from "./Component/User";
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
	super(props)
		
	// Set initial state
	this.state = {users_data :[],
    loading : false               
  }
	this.updateState = this.updateState.bind(this)
  }
    
  updateState(){
      const link="https://reqres.in/api/users?page=1";
      fetch(link)
      .then(response => response.json())
      .then((users) => {
        
        this.setState({users_data :users.data,
            loading: false,
        })
        console.log(users.data);
      })
      .catch((error) => {
        console.error(error)
      })
  }
    
  render(){

    return (<>
      <nav>
          <div className="box">
            <div className="row">
              <div className="column1">
                <h2>LET'S GROW MORE USERS</h2>
              </div>
              <div className="column2">
                <button onClick={this.updateState}>Get Users</button>
              </div>
            </div>
          </div>
        </nav>
        <div className="box2">
         <Users_frame loading={this.state.loading} users={this.state.users_data}/>
         </div>
    </>
    )
  }
}
	
export default App;

