import "./ToDoInsert.scss";
import {MdAdd} from 'react-icons/md'
import { useCallback, useState } from "react";

// 컴포넌트는 할 일 항목을 추가하는 데 사용

// react-icons 패키지에서 MdAdd 아이콘을 가져옴

// ToDoInsert 함수 컴포넌트 선언
// 함수 컴포넌트 ToDoInsert를 선언합니다. 이 컴포넌트는 onInsert라는 하나의 prop을 받음
// 할 일 항목을 추가하는 데 필요한 상태와 함수들이 정의

// 상태 관리
// value라는 상태를 useState를 사용하여 선언
// 이 값은 입력 필드에 입력된 내용을 저장
// setValue 함수를 사용하여 value 상태를 업데이트

// onChange 함수
// useCallback을 사용하여 입력 필드 값이 변경될 때 호출되는 함수
// 입력 필드의 값이 변경되면 해당 값으로 value 상태가 업데이트

// onSubmit 함수
// useCallback을 사용하여 폼이 제출될 때 호출되는 함수
// onInsert 함수를 호출하여 입력된 value 값을 전달하여 새로운 할 일 항목을 추가
// value 상태를 초기화하여 입력 필드를 비움
// 폼의 기본 동작(새로고침)을 방지하기 위해 e.preventDefault()를 호출

//컴포넌트 반환
// 컴포넌트는 TodoInsert 클래스를 가진 form 요소로 구성되어 있음
// 폼 요소에는 onSubmit 함수가 폼의 제출 이벤트에 연결되어 있음
// 입력 필드와 "추가" 버튼이 있음
// 입력 필드의 값은 value 상태와 연결되어 있음
// "추가" 버튼 내부에는 MdAdd 아이콘이 표시

function ToDoInsert({onInsert}) {
    
    const [value, setValue] = useState('');
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[])
    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue(''); //value 초기화
            //기본이벤트(새로고침) 방지
            e.preventDefault();
        }
    ,[onInsert, value])
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
            onChange={onChange}
            value={value} placeholder="할 일을 입력하세요" />
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    )
}

export default ToDoInsert;