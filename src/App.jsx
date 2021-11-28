import React, { useState } from 'react';
import Todolist from './Todolist';
import todo from './images/todo.gif';

const App=()=>{

const [inputlist,setinputlist]=useState("");
const [items,setitems]=useState([]);
const itemEvent=(event)=>{
    setinputlist(event.target.value);
};
const listofitems=()=>{
    setitems((olditems)=>{
        return [...olditems,inputlist];
    });
setinputlist("");
};
const deleteitems=(id)=>{
    console.log("Deleted");
    setitems((olditems)=>{
        return olditems.filter((arrElem,index)=>{
            return index!=id;

        })
    })
}

    return(
    <>
        <div className="main-div">
            <div className="center-div">
                <br/>
                <div className="im">
                <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List Here 🤞</figcaption>
                    </figure>
                    </div>
                <h1>To Do List</h1>
                <br/>
                <input type="text" placeholder="✍️ Add Items...."  className="op" value={inputlist} onChange={itemEvent}

                />
                <button onClick={listofitems}>+</button>
                <ul>
                    {/* <li>{inputlist}</li> */}
                   { items.map((itemval,index)=>{
                       return (
                           <Todolist
                           key={index}
                           id={index}
                           text={itemval}
                           onSelect={deleteitems}

                           />
                       );

                    })}
                </ul>
            </div>
        </div>
        {/* <footer>
            <p className="ft">All copyrights ©️ Reserved harshscode@gmail.com | T & C Apply </p>
        </footer> */}
    </>
    );
};
export default App;