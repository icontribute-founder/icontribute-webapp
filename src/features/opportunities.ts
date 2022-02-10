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

export const getOpportunitiesByIds = createAsyncThunk<
  any,
  { eventIds: any },
  { rejectValue: any }
>("opportunities/getOpportunitiesByIds", async ({ eventIds }, thunkApi) => {
  return await opportunityCollection.getOpportunitiesByIds(eventIds);
});

export const deleteOpportunity = createAsyncThunk<
  any,
  { userProfile: any; eventId: string },
  { rejectValue: any }
>(
  "opportunity/deleteOpportunity",
  async ({ userProfile, eventId }, thunkApi) => {
    await opportunityCollection.deleteOpportunity(eventId, userProfile.email);
    const eventIds = userProfile.event.filter((id: string) => id !== eventId);
    return await opportunityCollection.getOpportunitiesByIds(eventIds);
  }
);

export const opportunities = createSlice({
  name: "opportunities",
  initialState,
  reducers: {
    selectOpportunity: (state, action: PayloadAction<number>) => {
      state.indexSelected = action.payload;
    },
    addOpportunity: (state, { payload }) => {
      state.opportunities.push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOpportunitiesByIds.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOpportunitiesByIds.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.opportunities = payload;
    });

    builder.addCase(getOpportunitiesByIds.rejected, (state, { payload }) => {
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

export const { selectOpportunity, addOpportunity } = opportunities.actions;

export default opportunities.reducer;
