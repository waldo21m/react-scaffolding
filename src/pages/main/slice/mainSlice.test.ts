import { afterEach, describe, expect, it, vi } from 'vitest';
import reducer, {
	increment,
	decrement,
	incrementByAmount,
	initialState,
} from './mainSlice';

describe('mainSlice', () => {
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('Should redux createSlice', () => {
		reducer(initialState, increment());
		reducer(initialState, decrement());
		reducer(initialState, incrementByAmount(10));

		expect(reducer).not.toBeNull();
	});
});
