import React from "react";
import { IconType } from "react-icons";

import "./TextInput.style.scss";

type TextInputProps = {
  label: string;
  name: string;
  placeHolder: string;
  errorMessage: string;
  InputIcon: IconType;
  value: string;
  type: string;
  handler: Function;
};

const TextInput = ({
  label,
  name,
  placeHolder,
  errorMessage,
  InputIcon,
  value,
  type,
  handler,
}: TextInputProps) => {
  return (
    <div className="form-controller">
      <label>{label}</label>
      <div className="input-bloc">
        <input
          onChange={(e) => handler(e)}
          name={name}
          placeholder={placeHolder}
          value={value}
          type={type}
        />
        {<InputIcon className="icon" />}
      </div>
      {errorMessage && (
        <span className="message message--error message--hide">
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default TextInput;
