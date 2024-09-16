import React from "react";
import { useViewMasterStore } from "../../store";
import styles from "./Thumbs.module.scss";

function Thumbs() {
  const { images } = useViewMasterStore();

  const renderImages = () => {
    return images.map((image: string, index: number) => {
      return <img key={index} src={image} />;
    });
  };

  if (images.length === 0) {
    return;
  }

  return <div className={styles.thumbs}>{renderImages()}</div>;
}

export default Thumbs;
