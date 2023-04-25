// lib
import { useContext } from "react";

// store
import { StoreContext } from "../store";

export const useStore = () => useContext(StoreContext);