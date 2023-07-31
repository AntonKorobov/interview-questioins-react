import React, { useContext } from 'react';

import { contextGlobal } from './Context';

export function ContextConsumerFunction() {
  const { value, setValue } = useContext(contextGlobal);

  return (
    <div>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export class ContextConsumerClass extends React.Component {
  render() {
    return (
      <contextGlobal.Consumer>
        {({ value, setValue }) => (
          <div>
            <h2>{value}</h2>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
          </div>
        )}
      </contextGlobal.Consumer>
    );
  }
}
