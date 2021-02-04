import { useState, useRef, useEffect } from 'react';

const users = [
    {name: 'Sarah', age: 25},
    {name: 'Richard', age: 36},
    {name: 'Ally', age: 21},
];


const UserSearch: React.FC = ()=>{
    // you can use any so typescript will allow any types, probably not the best thing to do.
    //  const inputRef = useRef<any>(null);

    //typescript knows it might not be used so it might be null, then set the default val to null
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState("");

    // user will be an object with name as a string age with a number or it will be undefined.
    const [user, setUser] = useState<{name: string, age: number} | undefined>();

    // when you define a ref & want to use it, you need to make sure it is not null, once typescript knows it is not null
    // you can use it.
    useEffect(()=>{
     if(!inputRef.current){
         return;
     }
     inputRef.current.focus();
    }, []);

    // another way you can write it out. If current exists it must not be null
    // useEffect(()=>{
    //     if(inputRef.current){
    //       inputRef.current.focus();
    //     }
    //    }, []);
     
    const searchHandler = ()=>{
        const foundUser = users.find((user)=>{
           return user.name === name ;
        });
         setUser(foundUser);
    }



    return(
        <div>
         User search

         <input ref={inputRef} value={name} onChange={(e)=> setName(e.target.value)} />
         <button onClick={searchHandler}>Search</button>

             <div>
             <h3>{user && user.name}</h3>
             <p>{user && user.age}</p>
             </div>
             
        </div>
    )

}


export default UserSearch;