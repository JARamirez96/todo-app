import { images } from "../../../../assets/tasksImages/images";
import classes from "./Images.module.css";

const Images = ({ selectingImage, selectedImage }) => {
  return (
    <ul className={classes.tasks_images}>
      {images.map((image) => (
        <li
          key={image.alt}
          onClick={() => selectingImage(image)}
          className={
            selectedImage === image ? classes.selected_image : undefined
          }
        >
          <img src={image.src} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
};

export default Images;
