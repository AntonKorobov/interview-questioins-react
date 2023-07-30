import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ClassInput } from 'components/ClassComponents/ClassInput';

import { App } from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: 'class-components',
    element: <ClassInput />
  }
]);

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
