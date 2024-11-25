import { ImCart } from "react-icons/im";

export const CardWidget  = () => {
  return (
    <div className="flex items-center relative">
      <span className='bg-green-500 p-3 rounded-full drop-shadow-md cursor-pointer hover:bg-green-400 transition-all delay-2'>
      <ImCart  />
      </span>
      <span className='bg-red-500 p-2 rounded-full drop-shadow-md absolute bottom-0 -right-1 text-[7px] h-[20px] flex items-center'>
        0               
      </span>
    </div>
  )
}
