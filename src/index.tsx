import ReactDom from 'react-dom';
import Parent from './props-examples/Parent';
import GuestList from './state-examples/GuestList';
import UserSearch from './state-examples/UserSearch';
import EventComponent from './events-examples/EventComponent';

const App = ()=>{
 
    return(
        <div>
           <h1>Hi, testing</h1> 
          <Parent />
          <GuestList />
          <UserSearch />
          <EventComponent />
        
        </div>
    )
};


ReactDom.render(
    <App />,
    document.querySelector('#root')
);