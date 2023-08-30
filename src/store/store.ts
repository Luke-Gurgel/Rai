import { configureStore } from "@reduxjs/toolkit";
import { serviceOrdersReducer } from "./serviceOrders";
import { materialsReducer } from "./materials";
import { servicesReducer } from "./services";
import { clientsReducer } from "./clients";

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
    services: servicesReducer,
    serviceOrders: serviceOrdersReducer,
    materials: materialsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
