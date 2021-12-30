import { useState } from "react";

export function useFormInput(defaultValue, onChange = null) {
  const [value, setValue] = useState(defaultValue);

  function handleChange(e) {
    const newValue = e.target.value;

    setValue(newValue);

    if (onChange && typeof onChange === 'function') {
      onChange(newValue);
    }
  }

  return {
    onChange: handleChange,
    value
  };
};