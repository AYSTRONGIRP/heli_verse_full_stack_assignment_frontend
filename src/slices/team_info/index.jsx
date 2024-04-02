import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  members: [], // Array to store member IDs
};

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    // Add a member to the team
    addMember: (state, action) => {
      state.members.push(action.payload);
    },
    // Remove a member from the team
    removeMember: (state, action) => {
      state.members = state.members.filter(id => id !== action.payload);
    },
  },
});

export const { addMember, removeMember } = teamSlice.actions;

export default teamSlice.reducer;
