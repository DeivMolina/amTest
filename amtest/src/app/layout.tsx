"use client";

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import store from '../store'; 
import '../styles/globals.css';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="es">
      <body>
        <Provider store={store}>
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
