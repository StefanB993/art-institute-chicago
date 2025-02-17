import { createSlice } from "@reduxjs/toolkit";
import formatArtwork from "../../model/artwork";

const inititalState = {
  artworks: [],
  totalPages: 0,
  isLoading: false,
  bookmarks: [],
};

const artworksSlice = createSlice({
  name: "artworks",
  initialState: inititalState,
  reducers: {
    setArtworks: {
      reducer(state, action) {
        state.artworks = action.payload.formatedData;
        state.totalPages = action.payload.pages;
        state.isLoading = false;
      },
      prepare({ data, pages }) {
        const formatedData = data.map((item) => formatArtwork(item));
        return { payload: { formatedData, pages } };
      },
    },
    setArtworksTotalPages(state, action) {
      state.totalPages = action.payload;
    },
    setArtworksLoading(state) {
      state.isLoading = true;
    },
    setArtworkBookmark(state, action) {
      const id = action.payload;
      const isBookmarked = state.bookmarks.includes(id);
      if (isBookmarked) {
        state.bookmarks = state.bookmarks.filter((el) => el !== id); // Remove
      } else {
        state.bookmarks.push(id); // Add
      }
    },
  },
});

export const isLoading = (state) => state.artworks.isLoading;
export const getArtworkState = (state) => state.artworks;
export const getArtworkById = (id) => (state) =>
  state.artworks.artworks.find((artwork) => artwork.id == id);
export const isArtworkBookmarked = (id) => (state) =>
  state.artworks.bookmarks.includes(id);
export const getBookmarks = (state) => state.artworks.bookmarks;

export const { setArtworks, setArtworksLoading, setArtworkBookmark } =
  artworksSlice.actions;
export default artworksSlice.reducer;
