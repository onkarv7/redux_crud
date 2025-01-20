import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk for posting data
export const postData = createAsyncThunk(
  "postData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://67880f16c4a42c91610931c4.mockapi.io/users",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to post data");
      }
      const result = await response.json();
      console.log(result);
      return result; // Returning the result to the Redux store
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Async thunk for fetching data
export const getData = createAsyncThunk(
  "getData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://67880f16c4a42c91610931c4.mockapi.io/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const result = await response.json();
      console.log(result);
      return result; // Returning fetched data to the Redux store
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteData = createAsyncThunk(
  "deleteData",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://67880f16c4a42c91610931c4.mockapi.io/users/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to post data");
      }
      const result = await response.json();
      console.log(result);
      return result; // Returning the result to the Redux store
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateData = createAsyncThunk(
  "updateData",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://67880f16c4a42c91610931c4.mockapi.io/users/${data.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to post data");
      }
      const result = await response.json();
      console.log(result);
      return result; // Returning the result to the Redux store
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [], // Storing user posts
    loading: false, // Loading state
    error: null, // Error state
    searchData: [],
  },
  reducers: {
    searchUser: (state, action) => {
      console.log("search payload", action.payload);
      state.searchData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // Handling postData
      .addCase(postData.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload); // Add new post to state
      })
      .addCase(postData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      })

      // Handling getData
      .addCase(getData.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload; // Replace users with fetched data
      })
      .addCase(getData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        const { id } = action.payload;

        state.loading = false;
        state.users = state.users.filter((user) => user.id !== id);
      })
      // Handling postData
      .addCase(updateData.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear previous errors
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.loading = false;
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        ); // Update the specific user in the state
      })
      .addCase(updateData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Store error message
      });
  },
});

export default userSlice.reducer;
export const { searchUser } = userSlice.actions;
