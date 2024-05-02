import { useState } from "react";
import Header from "./components/Layouts/Header";
import Subheader from "./components/Layouts/Subheader";
import Products from "./components/Products/Products";


const App = () => {

  const [cartItems, setCartItems] = useState([])
  const [eventQueue, setEventQueue] = useState({
    id : "",
    type : ""
  })

  const handleAddItem = item => {
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)
    if(index>-1){
      items[index] = item
    }
    else{
      items.push(item)
    }
    setCartItems([...items])
  }
  const handleRemoveItem = item => {
    let items = [...cartItems]
    let index = items.findIndex(i => i.id === item.id)
    if(items[index].quantity === 0){
      items.splice(index,1)
    }
    else{
      items[index] = item
    }
    setCartItems([...items])
  }
  // type == 1 increase
  // type ==-1 decrease
  const handleEventQueue = (id,type) =>{
    console.log({id,type})
    setEventQueue({
      id,
      type
    })
  }

  return (
    <div>
      <Header count={cartItems.length} items = {cartItems} onHandleEvent={handleEventQueue} />
      <Subheader/>
      <Products onAddItem={handleAddItem} onRemoveItem={handleRemoveItem} eventState = {eventQueue} />
        

    </div>
  );
}

export default App;
