import { configureStore } from "@reduxjs/toolkit";

import activeModal from "./reducers/activeModal";
import isUserLogged from "./reducers/isUserLogged";

export const store = configureStore({
  reducer: {
    activeModal: activeModal,
    isLogged: isUserLogged,
  },
});

export type RootState = ReturnType<typeof store.getState>;
