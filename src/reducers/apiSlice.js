import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  response: null,
  error: null,
  operationId: null,
  parameters: null,
  success: false,
};

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    callApi: (state, { payload }) => ({
      ...state,
      loading: true,
      operationId: payload.operationId,
      parameters: payload.parameters || {},
    }),
    succeed: (state, { payload }) => {
      const output = payload.output || "output";
      return {
        ...state,
        loading: false,
        [output]: payload.response,
        success: true,
      };
    },
    failed: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        success: false,
      };
    },
    clearState: (state, { payload }) => {
      const output = payload.output || "output";
      return {
        ...state,
        [output]: {},
      };
    },
    setState: (state, { payload }) => {
      const output = payload.output || "output";
      return {
        ...state,
        [output]: payload.data,
      };
    },

    setStatus: (state, { payload }) => {
      return {
        ...state,
        success: payload.status,
      };
    },
    // New reducer to refresh API when loading state changes
    refreshApi: (state) => {
      if (!state.loading) {
        return {
          ...state,
          loading: false, // Set loading to true to initiate refresh
        };
      }
      return state;
    },
  },
});

export const {
  callApi,
  succeed,
  failed,
  clearState,
  setState,
  setStatus,
  clearAuthState,
  refreshApi,
} = apiSlice.actions;
export const selectApi = (state) => state.api;
export default apiSlice.reducer;
