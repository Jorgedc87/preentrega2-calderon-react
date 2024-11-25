import { Banner } from "../../assets/images";

export const HomePage = () => {
  return (
    <div className="mx-auto pb-8">
      {/* Banner */}
      <div className="relative w-full h-[400px] shadow-lg overflow-hidden">
      {/* Imagen como fondo */}
      <img 
        src={Banner} 
        alt="Banner" 
        className="absolute inset-0 w-full h-full object-cover" 
      />

      {/* Contenido superpuesto */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">¡Bienvenidos a Nuestra Tienda!</h1>
        <p className="mt-2 text-lg">Los mejores productos para tus mascotas, con envíos a todo el país.</p>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition">
          Explorar Productos
        </button>
      </div>
    </div>


      {/* Suscríbete */}
      <section className="container mt-12 max-w-[1000px] mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">¡Suscríbete a nuestro boletín!</h2>
        <p className="text-gray-600 mb-6">Sé el primero en enterarte de nuestras promociones y novedades.</p>
        <form className="flex flex-col md:flex-row items-center gap-4">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="w-full md:w-2/3 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-500"
          />
          <button
            type="submit"
            className="w-full md:w-1/3 px-4 py-2 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition"
          >
            Suscribirme
          </button>
        </form>
      </section>
    </div>
  );
};
