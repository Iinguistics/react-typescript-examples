// let the child comp know what to expect from the parent
interface ChildProps {
    color: String;
    age: Number;

    // its going to be a function, void meaning not expecting to get back any usable value from it
    onClick: ()=> void;
}


// making a functional component like this, the more normal way typescript does not know it is a FC
// it would throw errors if you try & use defaultProps,propTypes,contextTypes ect..if you dont need to use those this method is fine
export const Child = ({ color, age, onClick }: ChildProps)=>{

    return(
        <div>
        <p>Hi there, I am the child component {color}</p> 
         <p>I am {age} years old.</p>
         <button onClick={onClick}>Click me</button>
        </div>
    )
};

// another way to define a functional component with typescript
// you are telling typescript this will ChildAsFC will be a react function component, it might have props assigned to it like propTypes, contextTypes, ect
// & this will receive props of type ChildProps
// aslo this way of doing it, you can pass in the children prop, <child>any thing in here is props.children</child> so you can destructure children like normal
export const ChildAsFC: React.FC<ChildProps> = ({ color, age, onClick })=>{
     
    return(
        <div>
        <p>Hi there, I am the child component {color}</p> 
         <p>I am {age} years old.</p>
         <button onClick={onClick}>Click me</button>
        </div>
    )
};

