import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { useListeLivreurs } from "../data/useLivreurListe";

const CommandesClient = () => {
  const [commandes, setCommandes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(0);
  const [lid, setLid] = useState(0);
  const livreurs = useListeLivreurs();
  console.log(livreurs);
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
  }, [cid]);
  console.log(commandes);
  const handleCommande = (e, commande, lid) => {
    e.preventDefault();
    commande.livreur_id = lid;
    fetch(`http://127.0.0.1:8000/api/commandes/${commande.id}/${lid}`, {
      method: "PUT",
      body: JSON.stringify(commande),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        window.location.reload();
      });
  };

  /*useEffect(() => {
    console.log("a livreur");
  }, [hasLivreur]);*/

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
            <p
              style={{ color: "#f2a401", fonWeight: "bold" }}
            >{`N° ${commande.numero}`}</p>
            <p>Description: {commande.Description}</p>
            <p>Poids: {commande.poids}</p>
          </div>
          {!commande.livreur_id || (editMode && editId === commande.id) ? (
            <>
              <span
                style={{
                  marginLeft: "1rem",
                  marginBottom: "0.2rem",
                }}
              >
                Associer Livreur
              </span>
              <form>
                <select onChange={(e) => setLid(e.target.value)}>
                  <option value={0}>-- livreurs --</option>
                  {livreurs.map((livreur) => (
                    <option value={livreur.id} key={livreur.id}>
                      {livreur.prenom} {livreur.nom}
                    </option>
                  ))}
                </select>
                <button
                  className="valider"
                  onClick={(e) => handleCommande(e, commande, lid)}
                >
                  <FontAwesomeIcon icon={faSquareCheck} color="green" />
                  <span style={{ marginLeft: ".2rem" }}>valider</span>
                </button>
              </form>
            </>
          ) : (
            livreurs
              .filter((livreur) => livreur.id === commande.livreur_id)
              .map((l) => (
                <p style={{ padding: "1rem" }}>
                  Livré par: {l.prenom} {l.nom}
                  <button
                    className="modifier"
                    onClick={() => {
                      setEditId(commande.id);
                      setEditMode(true);
                    }}
                  >
                    modifier
                  </button>
                </p>
              ))
          )}
        </div>
      ))}
    </Wrapper>
  );
};

/* CSS using styled components */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: center;
  align-items: center;

  div.title h4 {
    margin-top: 1rem;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    text-align: center;
    color: #292d31;
  }

  div.card {
    width: 80%;
    margin-bottom: 1rem;
  }
  div.card form {
    display: flex;
    align-items: center;
    align-content: center;
    gap: 1rem;
    padding: 0 0 1rem 1rem;
  }
  div.card form .valider {
    background-color: lightgreen;
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
    border-radius: 3px;
    outline: none;
    border: none;
  }
  div.card .modifier {
    background-color: lightblue;
    padding: 0.2rem 0.4rem 0.2rem 0.4rem;
    border-radius: 3px;
    outline: none;
    border: none;
    margin-left: 1rem;
    font-weight: bold;
  }
  div.card form select {
    padding: 0.2rem;
  }

  @media (max-width: 400px) {
    padding: 0;
  } ;
`;

export default CommandesClient;
