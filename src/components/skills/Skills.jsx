import React from "react";
import htmlImg from "../../assets/html.png";
import cssImg from "../../assets/css.png";
import reactImg from "../../assets/react.png";
import jsImg from "../../assets/js.png";
import tsImg from "../../assets/ts.png";
import nextjsImg from "../../assets/nextjs.png";

const SkillObj = {
  HTML: [htmlImg, [<p>블록/인라인의 개념을 이해하여 적절한 태그를 사용</p>]],
  CSS: [
    cssImg,
    [<p>블록/인라인의 개념을 바탕으로 하여 원하는 레이아웃 구성 가능</p>],
  ],
  JavaScript: [
    jsImg,
    [<p>Promise then/catch, ES6 async/await 을 사용하여 비동기 처리 가능</p>],
  ],
  TypeScript: [tsImg, [<p>타입을 지정하여 데이터 검증을 할 수 있음</p>]],
  React: [
    reactImg,
    [
      <p>함수형 컴포넌트를 사용하였으며 useEffect로 리액트 생명주기의 이해</p>,
      <p>React-Query의 infiniteQuery 사용으로 비동기 데이터 호출</p>,
      <p>레이아웃 컴포넌트와 라우팅처리를 효율적으로 구현 가능</p>,
    ],
  ],
  NextJS: [
    nextjsImg,
    [<p>블록/인라인의 개념을 이해하여 적절한 태그를 사용</p>],
  ],
};
const Skills = () => {
  return (
    <div className="bg-[#ccc] py-[3.5rem]">
      <h2 className="text-[#fff] text-[2.5rem] font-light text-center pb-[3rem]">
        <span className="text-[#37C6C9]">MY</span> SKILLS
      </h2>
      <div className="w-[1000px] mx-auto">
        <ul className="grid grid-cols-3 grid-rows-2 gap-6">
          {Object.entries(SkillObj).map(
            ([skillName, [imgSrc, descriptions]]) => (
              <li
                key={skillName}
                className="flex flex-col gap-y-[1rem] items-center justify-center bg-white rounded-xl p-5 shadow"
              >
                <img
                  src={imgSrc}
                  alt={`${skillName} logo`}
                  className="w-[80px]"
                />
                <h3 className="text-xl font-semibold text-[#37C6C9] mb-2">
                  {skillName}
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-800">
                  {descriptions.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
