import { Component } from 'react';


interface User {
    name: string;
    age: number;
}
// let typescript know what you expect to receive as props
// below will be an array of objects
interface UserSearchProps{
    users: User[]
}

// let typescript know what you expect to have as your state
interface UserSearchState{
    name: string;
    user: User | undefined;
}

class UserSearch extends Component <UserSearchProps> {
    
     state: UserSearchState = {
        name: '',
        user: undefined
    };

    
    // would need to bring in props, not doing for this example
     searchHandler = ()=> {
        const foundUser = this.props.users.find((user)=>{
           return this.state.name === user.name ;
        });
         this.setState({ user: foundUser});
    }
    
    
    render(){
        
        return(
            <div>
            User search
   
            <input value={this.state.name} onChange={ (e)=> this.setState({name:e.target.value}) }/>
            <button onClick={this.searchHandler}>Search</button>
   
                <div>
                <h3>{this.state.user && this.state.user.name}</h3>
                <p>{this.state.user && this.state.user.age}</p>
                </div>
                
           </div>
        )
    }
}

export default UserSearch;