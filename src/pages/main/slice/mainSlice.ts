import { useSelector } from 'react-redux';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type AppState } from '../../../App.store';

interface MainState {
	count: number;
}

export const initialState: MainState = {
	count: 0,
};

export const mainSlice = createSlice({
	name: 'main',
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1;
		},
		decrement: (state) => {
			state.count -= 1;
		},
		incrementByAmount: (state, action: PayloadAction<number>) => {
			state.count += action.payload;
		},
	},
});

export const { increment, decrement, incrementByAmount } = mainSlice.actions;

export const useMainSelector = () =>
	useSelector<AppState, MainState>(({ [mainSlice.name]: slice }) => slice);

export default mainSlice.reducer;
