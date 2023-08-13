import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
  MdModeEditOutline,
} from 'react-icons/md';
import './ToDoListItem.scss';
import cn from 'classnames';
//기능에 맞는 아이콘을 불러오는 컴포넌트

function ToDoListItem({
  todo,
  onRemove,
  onToggle,
  onChangeSelectedTodo,
  onInsertToggle,
  style
}) {
  const { id, text, checked } = todo;
  return (
    <div className="TodoListItem-virtualized" style={style}>
      <li className="TodoListItem">
        <div
          className={cn('checkbox', { checked: checked })}
          onClick={() => onToggle(id)}
        >
          {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div
          className="edit"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          <MdModeEditOutline />
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
      </li>
    </div>
  );
}

export default React.memo(ToDoListItem);