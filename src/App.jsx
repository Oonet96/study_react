import { ColoredMessage } from "./components/ColoredMessage"
import { ColoredMessage2 } from "./components/ColoredMessage2"

export function App(){
    
    const divStyle = {
      border: '1px solid blue'
    }
    function aaa(param){
        alert(param)
    }
    function aab(){
        alert('난깡아지')
    }

    const redStyle ={
      color:'red',
      backgroundColor:'yellow'
    }
    const pinkStyle ={
      color:'pink',
      fontSize:'20px'
    }
    return (
      // <></> - fragment
      <div style = {divStyle}>
        {console.log('test')}
        <p style={{color:'blue'}}>안녕하세요</p>
        <p style={redStyle}>반갑습니다. 잘지내십니까?</p>
        <ColoredMessage color='black' message='오겡끼데스까?'/>
        <ColoredMessage color='red' message='how do you do?'/>
        <ColoredMessage2 color='blue'>짤찌냈숩니꽈!!?</ColoredMessage2>
        <p style={pinkStyle}>겡끼데스~</p>
        <button onClick={()=>{aaa('깡아지')}}>버튼</button>
        <button onClick={aab}>빠튼</button>
        {/* <button onClick={aaa('깡아지')}>버튼</button> 안된다~*/}
        {/* 이벤트안에 들어가는 함수에 매개변수를 집어넣고 싶으면 무명함수나 람다식(화살표 함수)로 감싸서 사용한다. */}
      </div>
    );
  
  }

  