function TodoInputBox(props){

    function doWriteTodo(e){
        e.preventDefault(); 
        props.setText(e.target.children[1].value);
        console.log(e.target.children[1].value);
    }

    return (
        <>
            <form onSubmit={(e)=>doWriteTodo(e)}>
                <label htmlFor="todo_box">해야할 일</label><input type="text" name="todo_box" id="" />
                <button>작성</button>
            </form>
        </>
    );
}

export default TodoInputBox;