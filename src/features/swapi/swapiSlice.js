import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://swapi.py4e.com/api";

export const fetchPerson = createAsyncThunk("swapi/fetchPerson", async (id) => {
  const res = await fetch(`${BASE_URL}/people/${id}/`);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  return res.json();
});

const swapiSlice = createSlice({
  name: "swapi",
  initialState: { person: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (b) => {
    b.addCase(fetchPerson.pending, (s) => {
      s.status = "loading";
      s.error = null;
    });
    b.addCase(fetchPerson.fulfilled, (s, a) => {
      s.status = "succeeded";
      s.person = a.payload;
    });
    b.addCase(fetchPerson.rejected, (s, a) => {
      s.status = "failed";
      s.error = a.error.message;
    });
  },
});

export default swapiSlice.reducer;
