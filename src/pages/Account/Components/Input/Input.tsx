import { SimpleUser } from "@/store";

export type InputProps = {
  label: string;
  property: keyof SimpleUser;
  state: SimpleUser;
  setState: React.Dispatch<React.SetStateAction<SimpleUser>>;
  title?: string;
  placeholder?: string;
  type?: string;
};

export function Input({
  label,
  property,
  state,
  setState,
  ...othersProps
}: InputProps) {
  return (
    <label>
      <span>{label}</span>

      <input
        value={state[property]}
        onChange={(e) =>
          setState((prev: SimpleUser) => ({
            ...prev,
            [property]: e.target.value,
          }))
        }
        {...othersProps}
      />
    </label>
  );
}
