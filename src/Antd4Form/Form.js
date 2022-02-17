import React from "react";
import FieldContext from "./context";
import { useForm } from "./useForm";
const Form = ({ children, form }) => {
  const [formInstance] = useForm(form);

  const onSubmit = (e) => {
    e.preventDefault();
    formInstance.submit();
  };

  return (
    <form onSubmit={onSubmit}>
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
};

export default Form;
