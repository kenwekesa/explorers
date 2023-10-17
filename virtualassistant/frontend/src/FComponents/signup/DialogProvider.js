import React, { useState, useContext, createContext } from 'react';

const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const [loadingDialogVisible, setLoadingDialogVisible] = useState(false);
  const [successDialogVisible, setSuccessDialogVisible] = useState(false);

  const openLoadingDialog = () => {
    setLoadingDialogVisible(true);
  };

  const closeLoadingDialog = () => {
    setLoadingDialogVisible(false);
  };

  const openSuccessDialog = () => {
    setSuccessDialogVisible(true);
  };

  const closeSuccessDialog = () => {
    setSuccessDialogVisible(false);
  };

  return (
    <DialogContext.Provider
      value={{
        loadingDialogVisible,
        successDialogVisible,
        openLoadingDialog,
        closeLoadingDialog,
        openSuccessDialog,
        closeSuccessDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export const useDialog = () => {
  return useContext(DialogContext);
};
