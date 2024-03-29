import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  defaultEvent,
  Event,
  EventCategory,
  HostingType,
  Shift,
} from "@icontribute-founder/firebase-access";
import { GeoPoint } from "firebase/firestore";
import { opportunityCollection } from "../configure";

export interface EditShiftProp {
  index: number;
  shift: Shift;
}

interface InitialState {
  opportunity: Event;
  loading: boolean;
  error: any;
  action: "create" | "edit";
}

const initialState: InitialState = {
  opportunity: {
    ...defaultEvent,
    coordinates: new GeoPoint(0, 0).toJSON(),
    ongoing: false
  },
  loading: false,
  error: null,
  action: "create",
};

export const createOpportunity = createAsyncThunk<
  InitialState,
  { userId: string; opportunity: Event },
  { rejectValue: any }
>(
  "opportunity/createOpportunity",

  async ({ userId, opportunity }, thunkApi) => {
    console.log("opportunity", opportunity);
    console.log("userId", userId);
    
    try {
      await opportunityCollection.createOpportunity(userId, {
        ...opportunity,
      });
    } catch (error) {
      console.log(error);
    }
    return { ...initialState };
  }
);

export const editOpportunity = createAsyncThunk<
  InitialState,
  { eventId: string; fields: Partial<Event> },
  { rejectValue: any }
>("opportunity/editOpportunity", async ({ eventId, fields }, thunkApi) => {
  await opportunityCollection.updateOpportunity(eventId, {
    ...fields,
  });
  return { ...initialState };
});

export const opportunitySlice = createSlice({
  name: "opportunity",
  initialState,
  reducers: {
    setAction: (state, action: PayloadAction<"create" | "edit">) => {
      state.action = action.payload;
    },
    updateCategories: (state, action: PayloadAction<EventCategory>) => {
      const category = action.payload;
      if (state.opportunity.categories.includes(category)) {
        const index = state.opportunity.categories.indexOf(category);
        if (index > -1) state.opportunity.categories.splice(index, 1);
      } else if (state.opportunity.categories.length < 3) {
        state.opportunity.categories.push(category);
      }
    },
    updateCompany: (state, action: PayloadAction<string>) => {
      state.opportunity.companyName = action.payload;
    },
    updateTitle: (state, action: PayloadAction<string>) => {
      state.opportunity.eventName = action.payload;
    },
    updateLocation: (state, action: PayloadAction<string>) => {
      state.opportunity.address = action.payload;
    },
    updateCoordinates: (
      state,
      action: PayloadAction<typeof defaultEvent.coordinates>
    ) => {
      state.opportunity.coordinates = action.payload;
    },
    updateDescription: (state, action: PayloadAction<string>) => {
      state.opportunity.description = action.payload;
    },
    updateRequirements: (state, action: PayloadAction<string>) => {
      state.opportunity.requirements = action.payload;
    },
    updateMiniumAge: (state, action: PayloadAction<number>) => {
      state.opportunity.minimumAge = action.payload;
    },
    updateProofOfVaccination: (state, action: PayloadAction<boolean>) => {
      state.opportunity.proofOfVaccination = action.payload;
    },
    updateDriverLicense: (state, action: PayloadAction<boolean>) => {
      state.opportunity.driversLicense = action.payload;
    },
    updateRole: (state, action: PayloadAction<string>) => {
      state.opportunity.role = action.payload;
    },
    updateNotes: (state, action: PayloadAction<string>) => {
      state.opportunity.notes = action.payload;
    },
    updateHostingType: (state, action: PayloadAction<HostingType>) => {
      state.opportunity.type = action.payload;
    },
    updateVirtual: (state, action: PayloadAction<boolean>) => {
      state.opportunity.virtual = action.payload;
    },
    updateDeadline: (state, action: PayloadAction<Date>) => {
      state.opportunity.deadline = action.payload.getTime();
    },
    updateImage: (state, action: PayloadAction<File>) => {
      state.opportunity.eventImage = action.payload;
    },
    updateUrl: (state, action: PayloadAction<string>) => {
      state.opportunity.url = action.payload;
    },
    newShift: (state, action: PayloadAction<Shift>) => {
      state.opportunity.shift.push(action.payload);
    },
    removeShift: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      console.log(index);
      state.opportunity.shift.splice(index, 1);
    },
    editShift: (state, action: PayloadAction<EditShiftProp>) => {
      const { index, shift } = action.payload;
      state.opportunity.shift[index] = shift;
    },
    reset: () => initialState,
    setExistingOpportunity: (state, action) => {
      let opportunity = !action.payload
        ? initialState.opportunity
        : action.payload;

      console.log(opportunity);

      const {
        eventID,
        eventName,
        address,
        description,
        requirements,
        minimumAge,
        proofOfVaccination,
        driversLicense,
        role,
        notes,
        virtual,
        categories,
        date,
        deadline,
        eventImage,
        url,
        coordinates,
      } = opportunity;

      state.opportunity.eventID = eventID;
      state.opportunity.eventName = eventName;
      state.opportunity.eventImage = eventImage;
      state.opportunity.address = address;
      state.opportunity.coordinates = coordinates;
      state.opportunity.description = description;
      state.opportunity.requirements = requirements;
      state.opportunity.minimumAge = minimumAge;
      state.opportunity.proofOfVaccination = proofOfVaccination;
      state.opportunity.driversLicense = driversLicense;
      state.opportunity.role = role;
      state.opportunity.notes = notes;
      state.opportunity.virtual = virtual;
      state.opportunity.deadline = deadline;
      state.opportunity.date = date;
      state.opportunity.categories = categories;
      state.opportunity.url = url;
      // state.opportunity.categories = categories;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOpportunity.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(createOpportunity.fulfilled, () => initialState);

    builder.addCase(createOpportunity.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    builder.addCase(editOpportunity.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(editOpportunity.fulfilled, () => initialState);

    builder.addCase(editOpportunity.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const {
  setAction,
  updateCompany,
  updateTitle,
  updateDescription,
  updateRequirements,
  updateMiniumAge,
  updateProofOfVaccination,
  updateDriverLicense,
  updateRole,
  updateNotes,
  updateLocation,
  updateCoordinates,
  updateCategories,
  updateHostingType,
  updateVirtual,
  updateDeadline,
  updateImage,
  updateUrl,
  newShift,
  editShift,
  removeShift,
  reset,
  setExistingOpportunity,
} = opportunitySlice.actions;

export default opportunitySlice.reducer;
