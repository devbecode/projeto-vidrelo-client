import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootState } from "../store";

export const useModalSelector: TypedUseSelectorHook<RootState> = useSelector;
