import { FC } from "react";
import ReactLoading from "react-loading";

interface Prop {
  type?:
    | "blank"
    | "balls"
    | "bars"
    | "bubbles"
    | "cubes"
    | "cylon"
    | "spin"
    | "spinningBubbles"
    | "spokes";
  color?: string;
  solo?: boolean;
}

const Loading: FC<Prop> = ({
  type = "spin",
  color = "#E1726E",
  solo = true,
}) => {
  return (
    <>
      {solo ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <ReactLoading type={type} color={color} height={60} width={60} />
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <ReactLoading type={type} color={color} height={40} width={40} />
        </div>
      )}
    </>
  );
};

export default Loading;
