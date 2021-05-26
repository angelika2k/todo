import React, { useState } from 'react'
import { connect } from 'react-redux';

const Todos = (props) => {

    const [todo, setTodo] = useState("");
    const handleChange = (e) => {
        setTodo(e.target.value);
    }
   console.log("props", props);
    return (
        <div className="addTodos">
            <input type="text" onChange={(e) => handleChange(e)} className="todo-input" />
            <button className="add-btn">add</button>
        </div>
    )
}

export default connect(null, null)(Todos);
