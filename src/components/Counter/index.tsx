import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { increment, amountAdded, decrement, reset } from "./state";

export default function Counter() {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div>
			<div>
				<h2>Count: {count}</h2>
			</div>
			<button onClick={() => dispatch(increment())}>Add 1</button>
			<button onClick={() => dispatch(amountAdded(3))}>Add 3</button>
			<button onClick={() => dispatch(decrement())}>Remove 1</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
		</div>
	);
}
