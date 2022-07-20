import React from "react";
import { IconType } from "react-icons";
import { FaExclamationTriangle } from "react-icons/fa";

import "./TextInput.style.scss";

type TextInputProps = {
  errorMessage?: string;
  handler: Function;
  InputIcon: IconType;
  name: string;
  placeHolder: string;
  type: string;
  value: string;
};

const TextInput = ({
  errorMessage,
  handler,
  InputIcon,
  name,
  placeHolder,
  type,
  value,
}: TextInputProps) => {
  const toggleLabel = (e: any) => {
    console.log(e);
  };

  return (
    <div className="form-controller">
      <div className="form-controller__text-input">
        {<InputIcon className="icon" />}
        <input
          onChange={(e) => handler(e)}
          name={name}
          placeholder={placeHolder}
          value={value}
          type={type}
          onFocus={(e) => toggleLabel(e)}
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
