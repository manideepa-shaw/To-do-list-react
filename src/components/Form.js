import React from 'react'
import { useState } from 'react';

export default function Form() {
    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const [flag, setFlag] = useState();
    const [id, setid] = useState(1);
    // to delete one item from the list
    const clearone = (id)=>{
        setList((old)=>{
          let newlist= old.filter((lists) => lists.id!==id);
            return newlist;
        })};
    // to clear all the elements from todo list
    const clrall=()=>
    {
        setFlag();
        setList([]);
        setid(1);
    }

    // to add items in the list
    const addlist =(e)=>
    {
        setFlag(1);
        e.preventDefault();
        const lists= {id,text};
        setList((list)=>{
            return [...list,lists];
        });
        setText('');
        setid(id+1);
        // console.log(text,id)
        // console.log(list)
    } 
    return (

        <div className="total">
            <h1>TODO <div className="white">List</div></h1>   
            <form onSubmit={addlist}>
                <input type="text" required maxLength={30} placeholder="Add a new todo" autoFocus
                id={id}
                name={text}
                value={text}
                onChange={(e)=>setText(e.target.value)}
                />
                <button className="submit" type="submit">+</button>
            </form>
            <div className="container">
                {/* to display the list using map */}
            {list.map((lists)=>{
                const {id,text}=lists;
                return(
                    <>
                    <h3 className="list">{text}</h3>
                    <button onClick={()=>clearone(id)} className="w3-btn"><i className="fa fa-trash"></i></button>
                    <br />
                    </>
                );
            })}
            </div>
            {flag&&<button className="clear" onClick={clrall}>Clear All</button>}
        </div>
    )
}
