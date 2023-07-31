import React from 'react';

type Ref = HTMLInputElement;

interface IForwardRefComponentProps {
  children?: React.ReactNode;
}

export const ForwardRefComponent = React.forwardRef<Ref, IForwardRefComponentProps>((pros, ref) => {
  return (
    <div>
      <input type="text" ref={ref} />
    </div>
  );
});
