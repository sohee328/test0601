import React, {useState} from 'react';

const ArrayFunc =()=>{
    const [name,setName]=useState('강호동');
    const [addr,setAddr]=useState('서울');
    const [count,setCount]=useState([3,4]);

    const change=()=>{
        //값을 변경해보자
        setName("이영자");
        setAddr("제주도");
        setCount([1,2,3]);
    }

    const incre=()=>{
        //배열 형태로 값추가
        setCount(count.concat(5));
    }

    //출력문 변수에 저장
    const list=count.map((n,i)=>(<li>{i}:{n}</li>));

    return(
        <div>
            이름: <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
            주소: <input type="text" value={addr} onChange={(e)=>setAddr(e.target.value)}/><br/>
            <hr/>
            <b>변경된 이름, 주소 출력</b><br/>
            <span style={{color:'red'}}>{name},{addr}</span>
            <hr/>
            <button type="button" onClick={change}>모두 변경</button>
            <button type="button" onClick={incre}>숫자 증가</button>
            <h3>숫자 배열 출력</h3>
            {list} 
        </div>
    );
}

export default ArrayFunc;