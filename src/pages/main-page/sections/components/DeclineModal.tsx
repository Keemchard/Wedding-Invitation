import React, { FC } from "react";

interface Prop {
  message: string;
}

const DeclineModal: FC<Prop> = ({ message }) => {
  return <div>{message}</div>;
};

export default DeclineModal;
