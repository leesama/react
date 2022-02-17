import React, { useEffect } from "react";
import Input from "./Input";
import Form from "./Form";
import Field from "./Field";
import { useForm } from "./useForm";
function Antd4Form() {
  const [form] = useForm();

  const onFinish = (val) => {
    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val); //sy-log
  };

  useEffect(() => {
    console.log("form", form); //sy-log
    form.setFieldsValue({ username: "default" });
  }, []);

  return (
    <div>
      <h3>MyRCFieldForm</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Field name="username">
          <Input placeholder="input UR Username" />
        </Field>
        <Field name="password">
          <Input placeholder="input UR Password" />
        </Field>
        <button>Submit</button>
      </Form>
    </div>
  );
}

export default Antd4Form;
