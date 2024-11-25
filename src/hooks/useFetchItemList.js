import { useEffect, useState } from "react";
import { catStoreItems, dogStoreItems } from "../data/items";

export const useFetchItems = (category, peso) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve, reject) => {
      setTimeout(() => {
        let filteredItems;
        if (category === "gatos") {
          filteredItems = peso
            ? catStoreItems.filter((item) => item.contain === peso)
            : catStoreItems;
        } else if (category === "perros") {
          filteredItems = peso
            ? dogStoreItems.filter((item) => item.contain === peso)
            : dogStoreItems;
        } else {
          filteredItems = [];
        }
        resolve(filteredItems);
      }, 1000);
    });

    getItems
      .then((items) => {
        setItems(items);
      })
      .finally(() => setLoading(false));
  }, [category, peso]);

  return { items, loading };
};
