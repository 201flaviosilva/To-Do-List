import type { UserProp } from "../../../actions/users";

type InputProps = {
	label: string;
	property: keyof UserProp;
	state: UserProp;
	setState: React.Dispatch<React.SetStateAction<UserProp>>;
	title?: string;
	placeholder?: string;
	type?: string;
}

export default function Input({ label, property, state, setState, ...othersProps }: InputProps) {
	return (
		<label>
			<span>{label}</span>

			<input
				value={state[property]}
				onChange={(e) =>
					setState((prev) => ({ ...prev, [property]: e.target.value }))
				}
				{...othersProps}
			/>
		</label>
	);
}
