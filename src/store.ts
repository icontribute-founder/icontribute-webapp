import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import authenticationReducer from "./features/authentication";
import opportunityReducer from "./features/opportunity";
import opportunities from "./features/opportunities";

export const store = configureStore({
  reducer: {
    opportunities: opportunities,
    opportunity: opportunityReducer,
    authentication: authenticationReducer,
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
