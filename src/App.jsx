import { useEffect, useRef } from "react";
import Footer from "./components/footer/Footer";
import { gsap } from "gsap";
import Header from "./components/header/Header";

function App() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.from(
      boxRef.current,
      {
        x: -200,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      []
    );
  });
  return (
    <>
      <Header />
      <div
        ref={boxRef}
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: "skyblue",
          margin: "100px auto",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
        }}
      ></div>
      <Footer />
    </>
  );
}

export default App;
