import reelUrl from "/reel.png";
import styles from "./Reel.module.scss";
import { useViewMasterStore } from "../../store";

function Reel() {
  const { images } = useViewMasterStore();

  const renderImages = () => {
    return images.map((image: string, index: number) => {
      return (
        <>
          <div
            className={`${styles[`slide-${index + 1}`]} ${styles.left}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
          <div
            className={`${styles[`slide-${index + 1}`]} ${styles.right}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </>
      );
    });
  };

  return (
    <div className={styles.reelContainer}>
      <div
        style={{ backgroundImage: `url(${reelUrl})` }}
        className={styles.reel}
      >
        <div className={styles.reelImagesContainer}>{renderImages()}</div>
      </div>
    </div>
  );
}

export default Reel;
