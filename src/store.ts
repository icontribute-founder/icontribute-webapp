import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import newOpportunityReducer from "./features/newOpportunity";

export const store = configureStore({
    reducer: { newOpportunity: newOpportunityReducer },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
