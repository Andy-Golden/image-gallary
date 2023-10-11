import "./styles.css";
import Image1 from "../assets/img1.jpeg";
import Image2 from "../assets/img2.jpeg";
import Image3 from "../assets/img3.jpeg";
import Image4 from "../assets/img4.jpeg";
import Image5 from "../assets/img5.jpeg";
import Image6 from "../assets/img6.jpeg";
import Image7 from "../assets/img7.jpeg";
import Image8 from "../assets/img8.jpeg";
import { useState } from "react";
import ImageGalary from "./components";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
  ];

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    setVisible(true);
  };

  return (
    <>
      <ImageGalary
        visible={visible}
        images={images}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        setVisible={setVisible}
      />
      <div className="wrapper">
        {images.map((image, index) => (
          <div key={index} className="card" onClick={() => handleClick(index)}>
            <img className="card__image" src={image} alt="image" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
