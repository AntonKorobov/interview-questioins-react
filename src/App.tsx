import { SilentComponentWithHOComponent } from 'components/HOC/HOComponent';
import React, { FC } from 'react';

export const App: FC = () => {
  return (
    <div>
      <SilentComponentWithHOComponent />
    </div>
  );
};
