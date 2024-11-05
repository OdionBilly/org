// import styled from 'tailwind';
import { atom} from 'recoil'


export function Todostate() {

  // atom function
  const todoListState = atom({
    key: 'TodoList',
    default: [],
  });
  return (
    <>
      
        <h1>Welcome to Todostate!</h1>
      
    </>
  );
}

export default Todostate;
