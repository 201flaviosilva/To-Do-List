import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
	value: number;
}

const initialState: CounterState = {
	value: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
		amountAdded(state, action: PayloadAction<number>) {
			state.value += action.payload;
		},
		decrement(state) {
			state.value--;
		},
		reset(state) {
			state.value = 0;
		},
	},
});

export const { increment, amountAdded, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
