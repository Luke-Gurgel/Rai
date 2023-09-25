"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { Toaster } from "sonner";

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Provider store={store}>
      <Toaster position="top-center" richColors />
      {children}
    </Provider>
  );
};
