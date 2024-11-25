import { Link } from "react-router-dom"

export const ItemCard = ({item}) => {
  return (
    <div className="w-[300px] rounded overflow-hidden shadow-lg flex flex-col items-center bg-white">
      <img className="max-w-[100px] max-h-[160px]" src={item.image} alt={item.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base h-[50px]">{item.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">{item.contain}</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">$ {item.price}</span>
      </div>
      <div className="px-6 py-4 flex gap-2">
        <Link to={`/item/${item.id}`} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Ver
        </Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Comprar
        </button>
      </div>
    </div>
  )
}
