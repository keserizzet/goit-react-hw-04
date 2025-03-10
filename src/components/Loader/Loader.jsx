import React from "react";
import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.css";

function Loader() {
  return <RotatingLines strokeColor="blue" strokeWidth="5" animationDuration="0.75" width="50" visible={true} />;
}

export default Loader;