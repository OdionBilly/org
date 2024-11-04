
import { IoAddCircle } from 'react-icons/io5';


export function Form() {
  return (
    <>
      <div>
        <form className=" flex gap-[5px]">
          <div className="text-[30px] text-[#8c11ce]">
            <IoAddCircle />
          </div>

          <div className=" flex justify-between gap-[20px] ">
            <input
              className="px-5 w-[700px]"
              type="text"
              placeholder="Memorize the dictionary"
              required
            />
            <button className="px-6 py-2 bg-[#8c11ce] text-[#fff] rounded-lg">
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
