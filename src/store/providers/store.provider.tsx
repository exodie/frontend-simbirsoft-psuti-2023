// lib
import { ReactNode, useState } from "react";

// store
import { StoreContext } from "../store";

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<StoreContextProps>({
    currentPage: "competitions",
  });

  const setPage = (page: CurrentPageProps) =>
    setData({ ...data, currentPage: page });

  return (
    <StoreContext.Provider value={{ data, setPage }}>
      {children}
    </StoreContext.Provider>
  );
};
