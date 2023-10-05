import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App.tsx';
import './index.css';
import { Overview } from './screens/overview';
import { Details } from './screens/details';
import { OverlayProvider } from './components/overlay-provider.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Number.POSITIVE_INFINITY,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Overview />,
      },
      {
        path: '/characters/:id',
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <OverlayProvider>
        <RouterProvider router={router} />
      </OverlayProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
