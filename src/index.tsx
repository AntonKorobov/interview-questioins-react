import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />
//   },
//   {
//     path: 'class-components',
//     element: <ClassInput />
//   },
//   {
//     path: 'error-boundary',
//     element: <ErrorBoundaryProvider></ErrorBoundaryProvider>
//   }
// ]);

createRoot(document.getElementById('root')).render(<App />);
