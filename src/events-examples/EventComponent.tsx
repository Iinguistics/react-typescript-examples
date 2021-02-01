

const EventComponent: React.FC = ()=>{

   // type inprints are not applied to functions outside the jsx like they are to inline functions within the jsx
   // if you hover over the onChange it will show the type of event: React.ChangeEvent<HTMLInputElement>
   // if your making non inline functions you can assign the type like in the example below
   const myEventHandler = (event: React.ChangeEvent<HTMLInputElement> )=>{
     console.log(event);
   }

   // hover over onDragStart it will show the type of event event: React.DragEvent<HTMLDivElement> if it was in a p tag it would be Revent: React.DragEvent<HTMLParagraphElement>
   const dragStartHandler = (event: React.DragEvent<HTMLDivElement> )=>{
    console.log(event);
  }

    return(
        <div>
          <input onChange={myEventHandler} />

          <div draggable onDragStart={dragStartHandler}>Drag me</div>
        </div>
    )
}

export default EventComponent;