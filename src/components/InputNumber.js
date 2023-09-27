import { useEffect, useRef } from "react";

const InputNumber = ({ name, value, onChange, step, title = "" }) => {
  const inpRef = useRef();
  useEffect(() => {
    inpRef.current.value = value;
  }, [value]);
  return (
    <input
      step={step}
      name={name}
      onBlur={onChange}
      onChange={onChange}
      onWheel={(e) => {
        e.currentTarget.blur();
      }}
      title={title}
      ref={inpRef}
      type="number"
      defaultValue={value}
    />
  );
};

export default InputNumber;
