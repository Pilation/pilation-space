interface IProps {
  id: string;
  name: string;
  handleChange: (e: any) => void;
  value?: string;
  type?: string;
}

export default function TextBox(props: IProps) {
  const { id, name, value, type, handleChange } = props;

  return (
    <div className="flex">
      <label htmlFor={id} className="block p-2 m-2">
        {name}
      </label>
      <div className="">
        <input
          id={id}
          name={name}
          onChange={handleChange}
          type={type === "number" ? "number" : "text"}
          className="max-w-lg block w-full shadow-sm p-2 m-2 border"
          value={value}
        />
      </div>
    </div>
  );
}
