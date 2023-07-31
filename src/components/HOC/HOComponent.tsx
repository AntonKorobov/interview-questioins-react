import React, { FC, useState } from 'react';

function HOComponent(Component: FC) {
  const [phrase, setPhrase] = useState('');

  function sayHi() {
    setPhrase('Hi!');
  }

  function sayBy() {
    setPhrase('By!');
  }

  return <Component sayHi={sayHi} sayBy={sayBy} phrase={phrase} />;
}

function SilentComponent(props) {
  return (
    <div>
      <h2>Silent component</h2>
      <>{props.phrase}</>
      <button onClick={() => props.sayHi()}>SayHi</button>
      <button onClick={() => props.sayBy()}>SayBy</button>
    </div>
  );
}

export function SilentComponentWithHOComponent() {
  return HOComponent(SilentComponent);
}
