import React from "react";
import FieldContext from "./context";
class Field extends React.PureComponent {
  static contextType = FieldContext;

  componentWillMount() {
    const { registerEneity } = this.context;
    this.cancelRegister = registerEneity(this);
  }

  componentWillUnmount() {
    this.cancelRegister();
  }

  filedFourceUpdate() {
    this.forceUpdate();
  }

  getControled = () => {
    const { getFieldValue, setFieldsValue, getFieldsValue } = this.context;
    const { name } = this.props;
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        setFieldsValue({ [name]: e.target.value });
        console.log(getFieldsValue());
      },
    };
  };
  render() {
    const { children } = this.props;
    const newChildren = React.cloneElement(children, {
      ...this.getControled(),
    });
    return <>{newChildren}</>;
  }
}

export default Field;
