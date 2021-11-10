import { Event } from "@icontribute-founder/firebase-access";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { opportunityCollection } from "../configure";

interface OpportunitiesI {
  opportunities: Event[];
  indexSelected: number;
  loading: boolean;
  error: any;
}

const initialState: OpportunitiesI = {
  opportunities: [],
  indexSelected: 0,
  loading: false,
  error: null,
};

export const getOpportunities = createAsyncThunk<
  any,
  void,
  { rejectValue: any }
>("opportunities/getOpportunities", async (_, thunkApi) => {
  return await opportunityCollection.getOpportunities();
});

export const deleteOpportunity = createAsyncThunk<
  any,
  { eventId: string },
  { rejectValue: any }
>("opportunity/deleteOpportunity", async ({ eventId }, thunkApi) => {
  await opportunityCollection.deleteOpportunity(eventId);
  return await opportunityCollection.getOpportunities();
});

export const opportunities = createSlice({
  name: "opportunities",
  initialState,
  reducers: {
    selectOpportunity: (state, action: PayloadAction<number>) => {
      state.indexSelected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOpportunities.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOpportunities.fulfilled, (state, { payload }) => {
      state.opportunities = payload;
      state.loading = false;
    });

    builder.addCase(getOpportunities.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(deleteOpportunity.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(deleteOpportunity.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.opportunities = payload;
      state.indexSelected = 0;
    });

    builder.addCase(deleteOpportunity.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { selectOpportunity } = opportunities.actions;

export default opportunities.reducer;
