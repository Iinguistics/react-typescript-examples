import { Child } from './Child';
import { ChildAsFC } from './Child';

const Parent = ()=>{

    const myClickFunction = ()=>{
        console.log('passing this to child as a prop');
    }
   
    let age = 21;
    return <ChildAsFC  color="red"  age={age}  onClick={myClickFunction} />
}

export default Parent;