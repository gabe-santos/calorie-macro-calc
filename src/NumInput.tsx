interface NumInputProps {
  label: string;
  value: number;
  onChange: Function;
}

export const NumInput = ({ label, value, onChange }: NumInputProps) => {
  return (
    <div className="form-control">
      <label className="label">{label}</label>
      <input
        type="number"
        className="input input-bordered max-w-xs"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
