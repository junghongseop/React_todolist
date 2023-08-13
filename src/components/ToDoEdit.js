import { useCallback, useEffect, useState } from 'react'; //react에서 useCallback, useEffect, useState를 가져옴
import './ToDoEdit.scss';

//함수 선언
//insertToggle, selectedTodo, onUpdate라는 세 개의 props를 받는다

//상태 관리
//value라는 상태를 useState를 사용하여 선언합니다. 이 값은 입력 필드에 입력된 내용을 저장
//setValue 함수를 사용하여 value 상태를 업데이트

//onChange함수
//useCallback을 사용하여 입력 필드 값이 변경될 때 호출되는 함수
//입력 필드의 값이 변경되면 해당 값으로 value 상태가 업데이트

//onSubmit 함수
//useCallback을 사용하여 폼이 제출될 때 호출되는 함수
//onUpdate 함수를 호출하여 선택된 할 일 항목의 id와 새로운 value 값을 전달하여 업데이트
//value 상태를 초기화하여 입력 필드를 비움
//폼의 기본 동작(새로고침)을 방지하기 위해 e.preventDefault()를 호출

//'useEffect' Hook
//selectedTodo 값이 변경될 때마다 호출되는 훅
//selectedTodo가 존재하면, 해당 할 일 항목의 text 값을 value 상태에 설정하여 입력 필드에 미리 기존 내용을 표시

//컴포넌트 반환
//컴포넌트는 background 클래스를 가진 div 요소로 감싸져 있음
//폼 요소가 선언되어 있으며, onSubmit 함수가 폼의 제출 이벤트에 연결
//h2 요소로 "수정하기"라는 제목을 표시
//입력 필드와 "수정하기" 버튼이 있음
//입력 필드의 값은 value 상태와 연결되어 있음

//이 컴포넌트는 수정과 선택, 업데이트와 같은 props를 통해 필요한 데이터와 함수를 전달 받아옴

function ToDoEdit({ insertToggle, selectedTodo, onUpdate }) {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      onUpdate(selectedTodo.id, value);
      setValue(''); 
      e.preventDefault();
    },
    [onUpdate, value],
  );
  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="todoedit__insert">
        <h2>수정하기</h2>
        <input
          onChange={onChange}
          value={value}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">수정하기</button>
      </form>
    </div>
  );
}

export default ToDoEdit;