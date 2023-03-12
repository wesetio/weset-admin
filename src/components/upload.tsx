import { useState } from "react";
import Image from "next/image";
import styles from "./UploadImage.module.css";

export default function UploadImage() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
      setImageUrl(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="upload-image"
        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-600"
      >
        Upload Image
      </label>
      <input
        id="upload-image"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        hidden
      />
      {imageUrl && (
        <div className={styles.imageContainer}>
          <Image src={imageUrl} alt="Uploaded image" layout="fill" objectFit="cover" />
        </div>
      )}
    </div>
  );
} 