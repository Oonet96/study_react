function TodoBox(props){

    function getCalculatedTime(){
        const year = props.time.getFullYear(); 
        const month = (props.time.getMonth() + 1).toString().padStart(2, '0');  
        const day = props.time.getDate().toString().padStart(2, '0'); 
        const yyyy_mm_dd = `${year}-${month}-${day}`;
        return yyyy_mm_dd;
    }

    function onClickComplete(){
        props.action(props.id);
    }

    return (
        <>
          <li><p>{getCalculatedTime()} / {props.text}</p><button onClick={onClickComplete}>작업완료</button></li>  
        </>
    );
}

export default TodoBox;