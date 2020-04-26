import React, { Children } from 'react';
import { AuthProvider } from './Auth';
import { ToastProvider } from './Toast';

const AppProvider: React.FC = () => {
  return (
    <AuthProvider>
      <ToastProvider>{Children}</ToastProvider>
    </AuthProvider>
  );
};

export default AppProvider;
