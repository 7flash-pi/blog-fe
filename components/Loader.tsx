import React from "react";
import { InfinitySpin } from "react-loader-spinner";
type Props = {
  color?: string;
};

const Loader = ({ color = "4fa94d" }: Props) => {
  return (
    <section className="flex justify-center items-center">
      <InfinitySpin color={color} />
    </section>
  );
};

export default Loader;
