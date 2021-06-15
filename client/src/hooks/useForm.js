import React, { useState } from "react";

export function useForm(initialModelObject) {
  const [values, setValues] = useState(initialModelObject());
  const [errors, setErros] = useState({});

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const resetFormControls = () => {
    setValues(initialModelObject());
    setErros({});
  };

  return {
    values,
    setValues,
    errors,
    setErros,
    handleInputChanges,
    resetFormControls,
  };
}
