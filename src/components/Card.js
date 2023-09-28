import github from "../assets/github-svgrepo-com.svg";

function Card(props) {
  return (
    <div className=" bg-card rounded-md drop-shadow-2xl shadow-2xl mx-5 h-[300px] w-[screen] my-[20px] flex-col ">
      <div className="flex h-[50px] mb-[10px] px-[20px] justify-between  ">
        <div className="flex flex-col justify-center">
          <h1 className="text-rose-500 text-[24px]  ">{props.title}</h1>
        </div>
        <div className="flex flex-col justify-center pr-[10px]">
          <img className="   rounded-full" src={github} alt="" />
        </div>
      </div>
      <div className=" flex justify-between px-[20px]  h-[200px]">
        <div className=" flex flex-col w-[50%] items-center justify-center">
          <p className="text-white text-[18px] ">{props.description}</p>
        </div>
        <div className="w-[50%]  flex flex-row justify-end">
          <img src={props.image} className="rounded-lg" alt=""></img>
        </div>
      </div>
      <div className=" flex space-x-6 px-[20px]">
        {props.tech_stack.map(function (data) {
          return <img src={data} alt="" />;
        })}
      </div>
    </div>
  );
}

export default Card;
