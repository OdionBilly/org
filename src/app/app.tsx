// import { RecoilRoot } from 'recoil';
import React, { useState } from 'react';
import Form from "../form"
// import TodoList from "../todolist"



export function App() {

  return (
    <>
      {/* <RecoilRoot> */}
        <div className="p-[200px]">
          <h1 className="text-[50px] font-bold">Todo List </h1>

          {/* form component */}
          <div className="py-10">
            <Form />
            {/* <TodoList/> */}
          </div>
        </div>
      {/* </RecoilRoot> */}
    </>
  );
}

export default App;
