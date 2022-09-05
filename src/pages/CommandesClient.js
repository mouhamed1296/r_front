import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const CommandesClient = () => {
  const [commandes, setCommandes] = useState([]);
  const cid = JSON.parse(localStorage.getItem("login")).cid;
  console.log(cid);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/listeCommande/${cid}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setCommandes(data);
      });
  }, []);
  console.log(commandes);

  return (
    <Wrapper>
      <div className="title">
        <h4>Listes Commandes</h4>
      </div>

      {commandes.map((commande) => (
        <div
          className="card"
          onClick={() => {
            /*setId(livreur.id);
              handleShow();*/
          }}
        >
          <div className="card-body" key={commande.id}>
            <p>{`N° ${commande.numero}`}</p>
            <p>Description: {commande.Description}</p>
            <p>Poids: {commande.poids}</p>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 1107px;

  div.title h4 {
    height: 33px;
    margin-left: 104px;
    margin-top: 50px;
    mar
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
    margin-left: 104px;
    width: 1684px;
  }
`;

export default CommandesClient;
