import React, { useState } from 'react'

const Todo = () => {

    const [todo, setTodo] = useState ("");
    const [allTodos, setAllTodos] = useState([]);
    console.log(todo, "todo")

    function handleChange(event){
        // console.log("Onchange triggered");
        // console.log(event.target.value);
        setTodo(event.target.value);
    }

    function handleSubmit(){
        setAllTodos([...allTodos, todo]);
        setTodo(" ");
    }
    function deleteTodo(index){
        // alert("Index");
        const newArray = [...allTodos];
        newArray.splice(index, 1);
        setAllTodos(newArray);
    }
  return (
    <div>
        <h1>Todo</h1>
        <div>
            <input value={todo} onChange={handleChange}/> <br/>
            <button onClick={handleSubmit}> Submit Todo</button>
            {allTodos.map((todo, i)=>(
                <div style={{
                    display:"flex",
                    width: "500px",
                    margin:"auto",
                    justifyContent:"space-around",
                    marginTop:"10px"
                    }}>
                <p key={i}>{" "}{i+1}. {todo}</p>

                <button style={{
                    width:"65px",
                    height:"30px",
                    background:"red",
                    border:"none",
                    borderRadius:"5px",
                    marginTop:"10px",
                    color:"white"
                }} onClick={(()=>deleteTodo(i))}>Delete</button>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Todo;