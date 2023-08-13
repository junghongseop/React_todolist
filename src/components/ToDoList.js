import React, { useCallback } from 'react';
import ToDoListItem from './ToDoListItem';
import './ToDoList.scss';
import {List} from 'react-virtualized'

//rowRender 함수는 react-virtualized와 같은 라이브러리를 사용하여 성능 최적화된 리스트를 렌더링하는데 활용- 
//이 함수는 리스트의 각 항목에 대한 렌더링을 담당, 해당 항목의 내용과 이벤트 핸들러를 전달하여 적절하게 렌더링하도록 도움
function ToDoList({ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle }) {
  const rowRender = useCallback(
    ({index,key,style}) => {
      const todo = todos[index];
      return(
        <ToDoListItem
        todo={todo}
        key={key}
        onToggle={onToggle}
        onRemove={onRemove}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
        style={style}
      />
      )
    },
    [ todos, onRemove, onToggle, onChangeSelectedTodo, onInsertToggle ]
  )
  
  return (
    <List 
      className='TodoList'
      width={512} // 전체너비
      height={513}// 전체 높이
      rowCount={todos.length}//항목갯수
      rowHeight={57} // 항목 높이
      rowRenderer={rowRender} //항목을 렌더링할 때 쓰는 함수
      list={todos}//배열
      style={{outline:'none'}} //List에 기본 적용되는 outline 스타일 제거
    />
  );
}

export default React.memo(ToDoList);