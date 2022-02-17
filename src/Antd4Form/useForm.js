import React from "react";

class formStore {
  constructor() {
    this.store = {};
    this.entities = [];
    this.callbacks = {};
  }

  registerEneity = (entity) => {
    this.entities.push(entity);
    return () => {
      this.entities = this.entities.filter((item) => item !== entity);
      delete this.store[entity.props.name];
    };
  };

  getFieldsValue = () => {
    return this.store;
  };

  setFieldsValue = (newVals) => {
    console.log(newVals, "22");
    this.store = {
      ...this.store,
      ...newVals,
    };
    this.entities.forEach((entity) => {
      const name = entity.props.name;
      if (Object.keys(newVals).includes(name)) entity.filedFourceUpdate();
    });
  };
  getFieldValue = (name) => {
    console.log(this);
    return this.store[name];
  };

  setFieldValue = () => {
    console.log("setFieldsValue");
  };

  validate = () => {};

  setCallbacks = (callbacks) => {
    this.callbacks = {
      ...this.callbacks,
      ...callbacks,
    };
  };

  submit = () => {
    console.log(this.store);
  };

  getForm = () => {
    return {
      getFieldsValue: this.getFieldsValue,
      setFieldsValue: this.setFieldsValue,
      getFieldValue: this.getFieldValue,
      setFieldValue: this.setFieldValue,
      validate: this.validate,
      registerEneity: this.registerEneity,
      setCallbacks: this.setCallbascks,
      submit: this.submit,
    };
  };
}

const useForm = (form) => {
  const formInstance = React.useRef();

  if (!formInstance.current) {
    if (form) {
      formInstance.current = form;
    } else {
      const store = new formStore();
      formInstance.current = store.getForm();
    }
  }

  return [formInstance.current];
};

export { useForm };
