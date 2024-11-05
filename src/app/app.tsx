
import Form from "../form"



export function App() {

  return (
    <>
      {/* <RecoilRoot> */}
        <div className=" max-sm:p-[50px] md:p-[100px] lg:p-[200px]  ">
          <h1 className=" max-sm:text-[35px] lg:text-[50px] font-bold">Todo List </h1>

          {/* form component */}
          <div className="py-10">
            <Form />
          </div>
        </div>
      {/* </RecoilRoot> */}
    </>
  );
}

export default App;
