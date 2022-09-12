import { useEffect } from "react";
import { useState } from "react";

export const useListeLivreurs = () => {
  const [livreurs, setLivreurs] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/listeLivreurs", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setLivreurs(data);
      });
  }, []);
  return livreurs;
};
