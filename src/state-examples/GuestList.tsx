import { useState } from 'react';


const GuestList: React.FC = ()=>{
    const [name, setName] = useState("");

    // useState( [] ); typescript will think this will always be an empty array
    // const [guests, setGuests] = useState( [""] ); this seems to work fine as well
    // tells typescript this will be an array with strings in it
      const [guests, setGuests] = useState<string[]>( [] );

    const guestHandler = ()=>{
        setGuests([...guests, name])
        setName("");
    }
     
    return(
        <div>
        <h1>Guest List</h1>
        {guests.map((guest)=>{
         return (
             <li key={guest}>{guest}</li>
         )
        })}


        <input value={name} onChange={(e)=> setName(e.target.value)} />
        <button onClick={guestHandler}>Add Guest</button>
        </div>
    )
};


export default GuestList;