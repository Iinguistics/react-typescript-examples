import { useState } from 'react';

const users = [
    {name: 'Sarah', age: 25},
    {name: 'Richard', age: 36},
    {name: 'Ally', age: 21},
];


const UserSearch: React.FC = ()=>{
    const [name, setName] = useState("");

    // user will be an object with name as a string age with a number or it will be undefined.
    const [user, setUser] = useState<{name: string, age: number} | undefined>();
     
    const searchHandler = ()=>{
        const foundUser = users.find((user)=>{
           return user.name === name ;
        });
         setUser(foundUser);
    }

    return(
        <div>
         User search

         <input value={name} onChange={(e)=> setName(e.target.value)} />
         <button onClick={searchHandler}>Search</button>

             <div>
             <h3>{user && user.name}</h3>
             <p>{user && user.age}</p>
             </div>
             
        </div>
    )

}


export default UserSearch;