import { useParams } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { ItemList } from "../../components/ItemList/ItemList";
import { useFetchItems } from "../../hooks/useFetchItemList";
import { useEffect, useState } from "react";

export const ShopPage = () => {
  const { category } = useParams();
  const [peso, setPeso] = useState("");
  const { items, loading } = useFetchItems(category, peso);

  const changePeso = (peso) => {
    setPeso(peso); 
  };

  useEffect(() => {
    setPeso("");
  }, [category]);


  return (
    <>
      <div>
        {loading ? (
          <p className="text-center text-gray-500">Cargando...</p>
        ) : (
          <ItemList items={items} />
        )}
      </div>
      <div className="flex justify-center my-5 space-x-6">
        <Button funcion={changePeso} texto="Todos" color="#ff7070" peso={""} />
        <Button
          funcion={changePeso}
          texto="Solo 3 kg"
          color="#96e7b9"
          peso={"3kg"}
        />
        <Button
          funcion={changePeso}
          texto="Solo 14 kg"
          color="#9fe796"
          peso={"14kg"}
        />
      </div>
    </>
  );
};
