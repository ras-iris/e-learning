import React from "react";
import { IconType } from "react-icons";
import { FaExclamationTriangle } from "react-icons/fa";

import "./TextInput.style.scss";

type TextInputProps = {
  errorMessage?: string;
  handler: Function;
  Icon: IconType;
  name: string;
  placeHolder: string;
  type: string;
  value: string;
};

const TextInput = ({
  errorMessage,
  handler,
  Icon,
  name,
  placeHolder,
  type,
  value,
}: TextInputProps) => {
  return (
    <div className="form-controller">
      <div className="form-controller__text-input">
        {<Icon className="icon" />}
        <input
          onChange={(e) => handler(e)}
          name={name}
          placeholder={placeHolder}
          value={value}
          type={type}
        />
      </div>
      {errorMessage && (
        <span className="message message--error message--hide">
          <FaExclamationTriangle />
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default TextInput;
