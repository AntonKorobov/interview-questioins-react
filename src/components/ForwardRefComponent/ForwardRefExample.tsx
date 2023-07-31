import React, { useRef } from 'react';
import { ForwardRefComponent } from './ForwardRefComponent';

export function ForwardRefExample() {
  const inputRef = useRef(null);

  function onClickHandler() {
    inputRef.current.focus();
  }

  return (
    <div>
      <button onClick={onClickHandler}>Add focus</button>
      <ForwardRefComponent ref={inputRef} />
    </div>
  );
}
