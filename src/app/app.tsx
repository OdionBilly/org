// import NxWelcome from './nx-welcome';
// import {useState} from "react"

import Form from "../form"

export function App() {

  // const [todo, setTodo] = useSate ([])

  return (
    <>
      <div className="p-[200px]">
        {/* <NxWelcome title="org" /> */}
        <h1 className="text-[50px] font-bold">Todo List </h1>

        {/* form component */}
        <div className="py-10">
          <Form />
        </div>
      </div>
    </>
  );
}

export default App;
