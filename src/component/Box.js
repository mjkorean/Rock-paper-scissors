import React from "react";

/*
함수이름과 수출이름이 같아야 함
컴포넌트는 항상 대문자로 시작해야 함, 그래야 컴포넌트로 인식됨
*/

const Box = (props) => {
  // Box = 함수이름
  console.log("props", props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />
      <h2>{props.result}</h2>
    </div>
  );
};

export default Box; // Box = 수출이름
