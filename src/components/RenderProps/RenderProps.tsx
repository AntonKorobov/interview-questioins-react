import React, { Dispatch, FC, SetStateAction, useState } from 'react';

interface IRenderPropsProps {
  renderUpButton?: (callback: Dispatch<SetStateAction<string>>) => JSX.Element;
  renderDownButton?: (callback: Dispatch<SetStateAction<string>>) => JSX.Element;
}

const RenderProps: FC<IRenderPropsProps> = ({ renderUpButton, renderDownButton }) => {
  const [counter, setCounter] = useState<string>('');

  return (
    <div>
      {renderUpButton && renderUpButton(setCounter)}
      {renderDownButton && renderDownButton(setCounter)}
      {'current value: ' + counter}
    </div>
  );
};

export const RenderPropsExample = () => {
  return (
    <RenderProps
      renderUpButton={(setState) => (
        <button onClick={() => setState((prev) => prev + 'up')}>Up</button>
      )}
      renderDownButton={(setState) => (
        <button onClick={() => setState((prev) => prev + 'down')}>Down</button>
      )}
    />
  );
};
