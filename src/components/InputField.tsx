import { twMerge } from "tailwind-merge";

type InputFieldProps = {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputClassName?: string;
  className?: string
};

const InputField = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  inputClassName,
  className
}: InputFieldProps) => {
  return (
    <div className={twMerge("w-full lg:w-6/12 mb-5 pr-5", className)}>
      <span data-name={name} className="relative block">
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={twMerge(
            "bg-white/80 w-full focus-visible:ring-0 focus:outline-0 focus:bg-white focus:border-[#86b7fe] focus:shadow text-black rounded-3xl text-sm h-auto py-2 px-5 bg-clip-padding border border-[#dee2e6] placeholder:text-gray-800/75",
            inputClassName
          )}
          size={40}
          maxLength={400}
          aria-required="true"
          aria-invalid="false"
        />
      </span>
    </div>
  );
};

export default InputField