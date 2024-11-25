import { useParams } from "react-router-dom";
import { useFetchItem } from "../../hooks/useFetchItem";
import { useState } from "react";

export const ItemPage = () => {
  const { itemId } = useParams(); 
  const { item, loading } = useFetchItem(itemId); 
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <p className="text-center text-gray-500">Cargando...</p>
      ) : item ? (
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-around gap-8">
          {/* Imagen del producto */}
          <div className="max-w-1/4  ">
            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Información del producto */}
          <div className="lg:max-w-full">
            <h2 className="text-3xl font-bold text-gray-800">{item.name}</h2>
            <p className="mt-2 text-gray-600">{item.description}</p>

            {/* Contenedor de precio */}
            <div className="mt-4">
              <p className="text-gray-500 line-through text-lg">${Math.floor(item.price * 1.1)}</p>
              <p className="text-2xl font-bold text-green-600">${item.price}</p>
            </div>

            {/* Selector de cantidad */}
            <div className="flex items-center mt-6">
              <button className="px-3 py-1 bg-gray-200 rounded-l-lg hover:bg-gray-300" onClick={handleDecrement}>
                -
              </button>
              <span className="px-4 py-1 bg-gray-100">{count}</span>
              <button className="px-3 py-1 bg-gray-200 rounded-r-lg hover:bg-gray-300" onClick={handleIncrement}>
                +
              </button>
            </div>

            {/* Botón de compra */}
            <button className="mt-6 w-full bg-green-500 text-white font-bold py-2 rounded-lg hover:bg-green-600 transition">
              Comprar
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-red-500">Item no encontrado.</p>
      )}
    </div>
  );
};
