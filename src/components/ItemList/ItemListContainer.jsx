import { useEffect, useState } from "react";
import { catStoreItems } from "../../data/items";
import { ItemList } from "./ItemList";
import { Button } from "../Button/Button";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [peso, setPeso] = useState('');

  const changePeso = (peso) => {
    setPeso(peso);
  }

  useEffect(() => {
    if(peso === ''){
      const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(catStoreItems);
        }, 1000);
      });

      getItems.then((items) => {
        setItems(items);
      });
    }else {
      const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(catStoreItems.filter(item => item.contain === peso));
        }, 1000);
      });

      getItems.then((items) => {
        setItems(items);
      });
    }

    
  }, [peso]);

  return (
    <>
      <div>
        <ItemList items={items} />
      </div>
      <div className="flex justify-center mt-5 space-x-6 ">
        <Button funcion={changePeso} texto='Todos' color="#ff7070" peso={''} />
        <Button funcion={changePeso} texto='Solo 3 kg' color="#96e7b9" peso={'3kg'} />
        <Button funcion={changePeso} texto='Solo 14 kg' color="#9fe796"  peso={'14kg'} />
      </div>
    </>
  )
}
