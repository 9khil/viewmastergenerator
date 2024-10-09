import { useViewMasterStore } from "../../store";
import styles from "./Upload.module.scss";

export default function Upload() {
  const { images, setImages, is3DReel, setIs3DReel } = useViewMasterStore();
  const loadFile = (event: any) => {
    if (!is3DReel) {
      const newImageArray = [
        ...images,
        URL.createObjectURL(event.target.files[0]),
      ];

      setImages(newImageArray);

      return;
    }

    const new3DImageArray = [
      ...images,
      URL.createObjectURL(event.target.files[0]),
      URL.createObjectURL(event.target.files[1]),
    ];

    setImages(new3DImageArray);
  };

  return (
    <div className={styles.upload}>
      <div>
        <hr />
        <label>
          <input
            type="checkbox"
            checked={is3DReel}
            onChange={(e) => setIs3DReel(e.target.checked)}
          />
          Create 3D reel
        </label>

        {!is3DReel && (
          <p>
            Select <strong>7</strong> photos, one at a time (sorry)
          </p>
        )}
        {is3DReel && (
          <>
            <p>
              Select <strong>14</strong> photos, two at a time. (still sorry)
            </p>
            <p>Names must sorted ascending with left eye first</p>
          </>
        )}
        <div>
          <input
            type="file"
            multiple={is3DReel}
            accept="image/*"
            name="image"
            id="file"
            onChange={loadFile}
          />
        </div>
      </div>
    </div>
  );
}
