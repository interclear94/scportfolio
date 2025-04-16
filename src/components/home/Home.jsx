import React from "react";

import gsap from "gsap";

import { useRef, useEffect, useState } from "react";

import H2Title from "./H2Title";

import homeProfile from "../../assets/home-remove.png";

const Home = () => {
  const [text, setText] = useState("");

  const targetText = "End가 아닌 And에 가치를 두다. Front'And'를 꿈꾸는 사람";

  const indexRef = useRef(0);

  useEffect(() => {
    const typeNextChar = () => {
      if (indexRef.current <= targetText.length) {
        setText(targetText.substring(0, indexRef.current));

        indexRef.current += 1;

        gsap.delayedCall(0.1, typeNextChar);
      }
    };

    typeNextChar();
  }, []);

  return (
    <div className="w-[100%] h-[700px] bg-black flex justify-center items-center text-[#dedede] text-[2.5rem]">
      <div>
        <div>
          <div
            className="w-[300px] h-[300px] overflow-hidden absolute rounded-[50%] left-[50%] top-[50%] translate-[-50%] border-[3px] 
          border-[#29b9bbba]"
          >
            <img
              className="absolute left-[50%] top-[50%] translate-[-50%] opacity-[0.4]"
              src={homeProfile}
              alt="로고 이미지
          "
            />
          </div>
          <H2Title style="text-center absolute left-[50%] top-[50%] translate-[-50%] w-[700px]">
            {text}
            <span className="blinking-cursor relative bottom-[5px]">|</span>
          </H2Title>
        </div>
      </div>
    </div>
  );
};

export default Home;
