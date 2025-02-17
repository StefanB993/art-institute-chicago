import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    artwork: {
      query: "",
      page: 1,
      pageSize: 12,
    },
    exhibition: {
      query: "",
      page: 1,
      pageSize: 12,
    },
  },
  reducers: {
    // Artwork Reducers
    setArtworkQuery: (state, action) => {
      state.artwork.query = action.payload;
      state.artwork.page = 1;
      state.artwork.totalPages = 0;
    },
    setArtworkPage: (state, action) => {
      state.artwork.page = action.payload;
    },
    setArtworkPageSize: (state, action) => {
      state.artwork.pageSize = action.payload;
    },

    // Exhibition Reducers
    setExhibitionQuery: (state, action) => {
      state.exhibition.query = action.payload;
    },
    setExhibitionPage: (state, action) => {
      state.exhibition.page = action.payload;
    },
    setExhibitionPageSize: (state, action) => {
      state.exhibition.pageSize = action.payload;
    },
  },
});

export const {
  setArtworkQuery,
  setArtworkPage,
  setArtworkPageSize,
  setArtworkTotalPages,
  setExhibitionQuery,
  setExhibitionPage,
  setExhibitionPageSize,
} = filterSlice.actions;

export default filterSlice.reducer;

export const getArtworkFilter = (state) => state.filter.artwork;
