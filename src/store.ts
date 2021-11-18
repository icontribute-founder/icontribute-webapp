import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import opportunityReducer from "./features/opportunity";
import opportunities from "./features/opportunities";

export const store = configureStore({
  reducer: {
    opportunities: opportunities,
    opportunity: opportunityReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
