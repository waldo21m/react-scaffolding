import { useDispatch } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './pages/main/slice/mainSlice';

export const appReducer = combineReducers({
	[mainSlice.name]: mainSlice.reducer,
});

const appStore = configureStore({
	reducer: appReducer,
	devTools: import.meta.env.VITE_ENVIRONMENT !== 'production',
});

export type AppState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default appStore;
