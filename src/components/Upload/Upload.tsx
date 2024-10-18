import { useViewMasterStore } from "../../store";
import styles from "./Upload.module.scss";

export default function Upload() {
  const { images, setImages, is3DReel, setIs3DReel } = useViewMasterStore();

  const loadFile = (event: any) => {
    const files = event.target.files;

    if (!files) return;

    if (!is3DReel) {
      // For non-3D reel, allow multiple image uploads
      const newImageArray = [
        ...images,
        ...Array.from(files).map(file => URL.createObjectURL(file as File)),
      ];

      setImages(newImageArray);
    } else {
      // For 3D reel, take the first two images
      const new3DImageArray = [
        ...images,
        URL.createObjectURL(files[0]),
        URL.createObjectURL(files[1]),
      ];

      setImages(new3DImageArray);
    }
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
            Select <strong>7</strong> photos
          </p>
        )}
        {is3DReel && (
          <>
            <p>
              Select <strong>14</strong> photos, two at a time. (sorry)
            </p>
            <p>Names must sorted ascending with left eye first</p>
          </>
        )}

        <input
          type="file"
          onChange={loadFile}
          multiple={true}
        />
      </div>
    </div>
  );
}
