// import React, { useState } from "react";
// import TodoItem from "./TodoItem";

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [inputText, setInputText] = useState("");

//   const handleInputChange = (e) => {
//     setInputText(e.target.value);
//     console.log(inputText);
//   };

//   // 입력된 내용을 list에 추가, 입력 창은 초기화
//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (!inputText.trim()) return; // trim()은 공백을 없애는 함수, 공백이 입력되면 종료
//     setTodos((prev) => [...prev, { id: Date.now(), text: inputText }]);
//     setInputText(""); // input 내의 값은 초기화
//   };

//   return (
//     <div>
//       <h2>To-Do List</h2>
//       <form onSubmit={handleAdd}>
//         <input
//           placeholder="할 일을 입력하세요."
//           value={inputText}
//           onChange={handleInputChange}
//         />
//         <button type="submit">추가</button>
//       </form>
//       <ul>
//         {todos.map((todo) => (
//           // todos 배열 안을 하나씩 돌 것
//           // todos 배열에 접근하기 위해서 todo라는 키워드를 사용
//           <TodoItem key={todo.id} TodoItem todo={todo} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TodoList;

import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    // console.log(inputText);

    //
    if (e.target.value.trim().length < 3) {
      setError(true); // setError를 true로 = Error가 되도록!
    } else {
      setError(false);
    }

    if (!e.target.value.trim()) setError(false);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    if (inputText.trim().length < 3) {
      setError(true);
      return;
    }

    setTodos((prev) => [...prev, { id: Date.now(), text: inputText }]);
    setInputText("");
    setError(false);
  };

  return (
    <div className="bg-gray-200 h-screen flex flex-col items-center">
      <h2 className="text-5xl font-bold my-10">To-Do List</h2>
      <form onSubmit={handleAdd} className="flex gap-2 mb-5 relative">
        <input
          placeholder="할 일을 입력하세요."
          value={inputText}
          onChange={handleInputChange}
          className={`px-4 py-2 border rounded-2xl bg-white outline-none  ${
            error && "border-red-500"
          }`}
        />
        {error && (
          <p className="text-red-500 text-sm absolute top-11 left-3">
            3글자 이상 입력해주세요.
          </p>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-100 border rounded-2xl hover:bg-blue-400 cursor-pointer"
        >
          추가
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
