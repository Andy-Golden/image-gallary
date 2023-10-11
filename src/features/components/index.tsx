import "./styles.css";

type PropsImageGalary = {
  visible: boolean;
  images: string[];
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  setVisible: (visibility: boolean) => void;
};

function ImageGalary({
  visible,
  images,
  selectedIndex,
  setSelectedIndex,
  setVisible,
}: PropsImageGalary) {
  const handleClickPrev = (index: number) => {
    setSelectedIndex(--index);
  };

  const handleClickNext = (index: number) => {
    setSelectedIndex(++index);
  };

  const handleClose = (visibility: boolean) => {
    setVisible(visibility);
  };

  return (
    <div className={`bg-gallary ${visible ? "show" : ""}`}>
      {selectedIndex !== 0 && (
        <span
          className="bg-gallary__prev"
          onClick={() => handleClickPrev(selectedIndex)}
        >
          <i className="fas fa-chevron-left" style={{ color: "#ffff" }}></i>
        </span>
      )}
      <img
        className="bg-gallary__image"
        src={images[selectedIndex]}
        alt="image-gallary"
      />
      {selectedIndex !== images.length - 1 && (
        <span
          className="bg-gallary__next"
          onClick={() => handleClickNext(selectedIndex)}
        >
          <i className="fas fa-chevron-right " style={{ color: "#ffff" }}></i>
        </span>
      )}
      <span className="bg-gallary__close" onClick={() => handleClose(false)}>
        <i className="fas fa-times" style={{ color: "#ffff" }}></i>
      </span>
    </div>
  );
}

export default ImageGalary;
