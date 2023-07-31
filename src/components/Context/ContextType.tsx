import React, { Component } from 'react';

import { contextGlobal } from './Context';

export class ContextType extends Component {
  static contextType = contextGlobal;
  context: React.ContextType<typeof contextGlobal>;

  render() {
    const { value, setValue } = this.context;

    return (
      <div>
        <h2>{value}</h2>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      </div>
    );
  }
}
