import React, { useState } from 'react';
import { contextGlobal } from './Context';
import { ContextConsumerFunction, ContextConsumerClass } from './ContextConsumer';
import { ContextType } from './ContextType';

export function ContextExample() {
  const [value, setValue] = useState('default value');

  return (
    <contextGlobal.Provider value={{ value, setValue }}>
      <ContextConsumerFunction />
      <ContextConsumerClass />
      <ContextType />
    </contextGlobal.Provider>
  );
}
