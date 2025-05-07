import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
    // 기존 prev 값에 1을 더한 값을 prev로 초기화
    // 가장 최신의 이전 값(prev)를 참조하여 사용
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleReset = () => {
    setCount((prev) => 0);
    // setCount(0);으로도 설정 가능!
    // count = 10;과 같은 방식으로는 상태가 수정되지 않음!
  };

  const btnStyle =
    "px-4 py-2 bg-white border hover:bg-yellow-300 cursor-pointer rounded-2xl";
  // 중복되는 CSS 스타일은 이와 같이 따로 변수를 만들고,기존 className에서 {btnStyle}으로 초기화하자!

  return (
    <div className="flex flex-col bg-gray-100 p-10">
      <h className="text-3xl font-bold mb-4">Counter</h>
      <p className="text-2xl mb-6">현재 값: {count}</p>
      <div className="flex gap-2 text-center">
        <button onClick={handleIncrease} className={btnStyle}>
          +1
        </button>
        <button onClick={handleDecrease} className={btnStyle}>
          -1
        </button>
        <button onClick={handleReset} className={btnStyle}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
