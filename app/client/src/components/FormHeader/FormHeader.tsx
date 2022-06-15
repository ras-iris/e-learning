import React from "react";

type FormHeaderProps = {
  formHeading: string;
  formSubHeading: string;
};

export const FormHeader = ({
  formHeading,
  formSubHeading,
}: FormHeaderProps) => {
  return (
    <>
      <h3>E-Learning | {formHeading}</h3>
      <span className="form__subheading"></span>
    </>
  );
};

export default FormHeader;
