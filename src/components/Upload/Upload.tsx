import { useViewMasterStore } from "../../store";

export default function Upload() {
  const { images, setImages } = useViewMasterStore();
  const loadFile = (event: any) => {
    // const image = document.getElementById("output") as any;
    // image.src = URL.createObjectURL(event.target.files[0]);
    const newImageArray = [
      ...images,
      URL.createObjectURL(event.target.files[0]),
    ];
    setImages(newImageArray);
  };

  return (
    <div className="upload">
      <div>
        <hr />
        <p>
          Select <strong>7</strong> photos, one at a time.
        </p>
        <div>
          <input
            type="file"
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
