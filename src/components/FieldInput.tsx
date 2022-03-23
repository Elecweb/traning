import { useField } from "react-final-form";

const TextInput = ({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) => {
  const { input, meta } = useField(name);

  return (
    <div>
      <label className="text-md py-2 font-light">{label}</label>
      <div className="flex flex-col pb-5 relative">
        <input
          {...input}
          className="h-12 px-4 w-100 bg-gray-100 focus:bg-gray-200 rounded focus:outline-none ring-black focus:ring-2 "
          type={type}
          placeholder={placeholder}
        />
        {meta.error && meta.touched && (
          <span className="text-xs text-red-500 pt-1 absolute bottom-0 error-shake">
            {meta.error}
          </span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
