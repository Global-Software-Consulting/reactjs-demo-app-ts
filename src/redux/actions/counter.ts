// A mock function to mimic making an async request for data
import { AppDispatch } from '../store';
import { incrementByAmount } from '../reducers/counter';

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500)
  );
}

export const incrementAsync = (amount: any) => (dispatch: AppDispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};
