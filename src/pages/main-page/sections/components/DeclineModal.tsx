import React, { FC } from "react";

interface Prop {
  message: string;
}

const DeclineModal: FC<Prop> = ({ message }) => {
  return <div className="bg-[red] flex justify-center">{message}</div>;
};

export default DeclineModal;
