import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Livraison = () => {
  const [livraison, setLivraison] = useState([]);
  const [cid, setCid] = useState(null);
  const [client, setClient] = useState(null);
  const lid = JSON.parse(localStorage.getItem("login")).lid;
  console.log(lid);
  const getClient = (id) => {
    fetch(`http://127.0.0.1:8000/api/personnes/${id}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setClient(data);
      });
    return "";
  };
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/listeLivraison/${lid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setLivraison(data);
      });
  }, []);
  console.log(livraison);

  return (
    <Wrapper>
      <div className="title">
        <h4>Listes de Livraison</h4>
      </div>

      {livraison.length !== 0 ? (
        livraison.map((liv) => (
          <div
            className="card"
            onClick={() => {
              /*setId(livreur.id);
                handleShow();*/
            }}
            key={liv.id}
          >
            <div className="card-body">
              <p>{`N° ${liv.numero}`}</p>
              <p>Description: {liv.Description}</p>
              <p>Poids: {liv.poids}</p>
              {`${getClient(liv.envoyeur_id)}`}
              <p>
                Client: {`${client && client.nom} ${client && client.prenom}`}
                <br />
                Numero: {`${client && client.telephone}`}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p
          style={{ marginTop: "5rem", fontSize: "1.2rem", fontWeight: "bold" }}
        >
          Aucune livraison à faire pour le moment
        </p>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;

  div.title h4 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    text-align: center;
    color: #292d31;
  }

  div.card {
    margin-top: 15px;
    width: 100%;
  }
`;

export default Livraison;
