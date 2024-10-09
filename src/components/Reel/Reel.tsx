import reelUrl from "/reel.png";
import styles from "./Reel.module.scss";
import { useViewMasterStore } from "../../store";
import { useState } from "react";
import Button from "../Button/Button";

function Reel() {
  const [debugMode, setDebugMode] = useState(false);
  const [reelRotation, setReelRotation] = useState(0);
  const { calibrationReelNumbers, calibrationReelColors, images, is3DReel } =
    useViewMasterStore();

  const rotateReel = () => {
    if (reelRotation >= 334) {
      setReelRotation(1 - 1);
    } else {
      setReelRotation(reelRotation + 360 / 14);
    }
  };

  const renderImages = () => {
    if (!debugMode && !is3DReel) {
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
    }

    if (!debugMode && is3DReel) {
      const reelContent = [];
      let reelIndex = 0;
      for (let i = 0; i < images.length; i++) {
        if (i % 2 == 0) {
          reelContent.push(
            <>
              <div
                className={`${styles[`slide-${reelIndex + 1}`]} ${styles.left}`}
                style={{ backgroundImage: `url(${images[i]})` }}
              ></div>
              <div
                className={`${styles[`slide-${reelIndex + 1}`]} ${
                  styles.right
                }`}
                style={{ backgroundImage: `url(${images[i + 1]})` }}
              ></div>
            </>
          );
          reelIndex++;
        }
      }

      return reelContent;
    }

    //Debug mode
    const debugReel = [];
    for (let i = 0; i < 7; i++) {
      debugReel.push(
        <>
          <div
            className={`${styles[`slide-${i + 1}`]} ${styles.left}`}
            style={{ backgroundColor: `${calibrationReelColors[i]}` }}
          >
            <span>{calibrationReelNumbers[i]}</span>
          </div>
          <div
            className={`${styles[`slide-${i + 1}`]} ${styles.right}`}
            style={{ backgroundColor: `${calibrationReelColors[i]}` }}
          >
            <span>{calibrationReelNumbers[i]}</span>
          </div>
        </>
      );
    }
    return debugReel;
  };

  return (
    <div
      className={styles.reelContainer}
      style={{ transform: `rotate(${reelRotation}deg)` }}
    >
      <div className={styles.calibrationDiskSwitchContainer}>
        <div>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={debugMode}
              onChange={() => setDebugMode(!debugMode)}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <div>Calibration disc</div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(${reelUrl})` }}
        className={styles.reel}
      >
        <div className={styles.reelImagesContainer}>{renderImages()}</div>
      </div>

      <div className={styles.buttons}>
        <Button onClick={rotateReel} text="Rotate reel" />
        <Button onClick={() => setReelRotation(1 - 1)} text="Reset rotation" />
      </div>
    </div>
  );
}

export default Reel;
