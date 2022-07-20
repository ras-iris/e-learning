import React from "react";

type FormHeaderProps = {
  formHeading: string;
};

export const FormHeader = ({ formHeading }: FormHeaderProps) => {
  return (
    <>
      <h3>E-Learning | {formHeading}</h3>
    </>
  );
};

export default FormHeader;
