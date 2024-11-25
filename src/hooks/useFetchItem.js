import { useEffect, useState } from "react";
import { catStoreItems, dogStoreItems } from "../data/items";

export const useFetchItem = (itemId) => {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [listComplete, setListComplete] = useState([...catStoreItems, ...dogStoreItems]);

  useEffect(() => {
    itemId = parseInt(itemId, 10);
    console.log(listComplete);
    const fetchItem = () => {
      setLoading(true);
      if (itemId) {
        const item = listComplete.find((item) => item.id === itemId);
        setItem(item);
        setLoading(false);
      }
    };

    fetchItem();
  }, [itemId]);

  return { item, loading };
}