import { ChangeEvent } from "react";

interface LabelInputType {
    label: string;
    placeholder: string;
    type?: string;
    name?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }

 const LabelInput = ({
    label,
    placeholder,
    type,
    name,
    onChange,
  }: LabelInputType) => {
    return (
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <label
          htmlFor={name}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            id={name}
            name={name}
            type={type || ""}
            placeholder={placeholder}
            onChange={onChange}
            required
            autoComplete="email"
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          />
        </div>
      </div>
    );
  };

  export default LabelInput