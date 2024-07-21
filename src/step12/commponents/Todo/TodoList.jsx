import { useState, useEffect } from "react";
import TodoInputBox from "./TodoInputBox.jsx";
import TodoBox from "./TodoBox.jsx";

function TodoList(){
    const [todoText ,setText] = useState('');
    const [todoKey,setKey] = useState(0);
    const [todoBox,setTextBox] = useState([]);

    function deleteTodoBox(key){
        let tmpBoxArr = todoBox;
        let tmpArr = new Array();
        for(let i = 0; i<tmpBoxArr.length; i++){
            if(key != tmpBoxArr[i].id)
                tmpArr.push(tmpBoxArr[i]);
        }
        setTextBox(tmpArr);
    }



    useEffect(()=>{
        let tmpBox = todoBox;
        let now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60 * 1000);
        const koreaTimeDiff = 9 * 60 * 60 * 1000;
        const koreaTime = new Date(utc + koreaTimeDiff);
        
        if(todoText != ''){
            tmpBox.push({id:todoKey,time: koreaTime,text:todoText});
            setKey(todoKey+1);
            console.log(todoKey);
            setTextBox(tmpBox);
        }
    },[todoText]);

    return(
        <>
            <TodoInputBox setText={setText}/>
            <div>
                <ul>
                    {todoBox.map(todo => <TodoBox id={todo.id} time={todo.time} text={todo.text} action={(e)=>{deleteTodoBox(e);}}/>)}
                </ul>
            </div>
        </>
    );
}

export default TodoList;