import { IoAddCircle } from 'react-icons/io5';
import { CiCircleCheck } from 'react-icons/ci';
import React, { useState } from 'react';

export function Form() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);

  //  handle inpute change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  // Handle form submission to add a new todo
  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent the default form behavior (page reload)
    if (todo.trim()) {
      setTodos([...todos, todo]);
      setTodo(''); // Clear input after adding the todo
    }
  };

  // // Handle deletion of a specific todo
  // const handleDelete = (index: number) => {
  //   // Filter out the todo by index
  //   const updatedTodos = todos.filter((_, i) => i !== index);
  //   setTodos(updatedTodos); // Update the todos state
  // };

  return (
    <>
      <div>
        {/* new Items */}
        <ul>
          {todos.map((todo, index) => (
            <div className="pl-[5px] pb-4 flex gap-4 items-baseline">
              <h1 className="font-bold">
                <CiCircleCheck className="size-6 text-[#fff] bg-[#8c11ce] rounded-md cursor-pointer" />
              </h1>
              <li key={index}>{todo}</li>
            </div>
          ))}
        </ul>

        {/* forms */}

        <form className="flex gap-[5px] ">
          <div className="text-[30px] text-[#8c11ce] ">
            <button className="font-bold">
              <IoAddCircle className="pt-" />
            </button>
          </div>

          <div className="flex justify-between max-sm:gap-5 md:gap-[50px]  lg:gap-[20px] ">
            <input
              className=" max-sm:px-2 lg:px-5 max-sm:w-[200px] xl:w-[700px]"
              type="text"
              value={todo}
              onChange={handleInputChange}
              placeholder="Memorize the dictionary"
              // required
            />
            <button
              onClick={handleFormSubmit}
              className=" max-sm:w-[100px] max-sm:px-4 md:px-5  lg:px-6 lg:py-2 bg-[#8c11ce] text-[#fff] rounded-lg"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
