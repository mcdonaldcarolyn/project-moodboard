//import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const type = "Image";

const Image = ({ image, index, moveImage }) => {
  const ref = useRef(null);
  
  const [, drop] = useDrop({
    accept: type,
    hoover(item) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    itme: { type, id: image.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity: isDragging ? 0 : 1 }}
      className="moodboard-img-item"
    >
      <img
        alt={`img - ${image.id}`}
        src={image.src}
        className="moodboard-img"
      />
    </div>
  );
};

const MoodboardImage = ({ images, moveImage }) => {
  const renderImage = (image, index) => {
    return (
      <Image
        image={image}
        index={index}
        key={`${image.id}-image`}
        moveImage={moveImage}
      />
    );
  
};
return (
  <section className="moodboard-img-list">
    {images.map(renderImage)}
  </section>
);
};

export default MoodboardImage;

