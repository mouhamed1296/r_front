import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  faCheck,
  faClose,
  faMessage,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useListeLivreurs } from "../data/useLivreurListe";
// import { useMediaQuery } from 'react-responsive';

const ChercherLivreur = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const livreurs = useListeLivreurs();

  console.log(livreurs);

  const [id, setId] = useState("");
  const [livreur, setLivreur] = useState({});
  useEffect(() => {
    setLivreur(livreurs.find((livreur) => livreur.id === id));
  }, [livreurs, id]);
  console.log(livreur);

  return (
    <Wrapper>
      <Header>
        <div className="bouton">
          <p className="UOne">
            <Link to={"/dashboard/espaceClient"}>Retour</Link>
          </p>
          <p className="Dtwo">
            <button>Chercher Livreur</button>
          </p>
        </div>
      </Header>
      <div className="title">
        <h4>Listes Livreurs</h4>
      </div>

      {livreurs.map((livreur) =>
        livreur.disponibilite ? (
          <div
            className="card"
            onClick={() => {
              setId(livreur.id);
              handleShow();
            }}
          >
            <div className="card-body" key={livreur.id}>
              <p>
                {livreur.prenom} {livreur.nom}
              </p>
            </div>
          </div>
        ) : null
      )}

      {livreur && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Details livreurs</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p> Prenom : {livreur.prenom} </p>
            <p> Nom : {livreur.nom} </p>
            <p>
              {" "}
              Disponibilite :{" "}
              {livreur.disponibilite ? (
                <FontAwesomeIcon icon={faCheck} color="green" />
              ) : (
                <FontAwesomeIcon icon={faClose} color="red" />
              )}
            </p>
            <div>
              <h4>Coordonn??es</h4>
              <p
                onClick={() => {
                  if (showMessage === false) {
                    setShowMessage(true);
                  } else {
                    setShowMessage(false);
                  }
                }}
              >
                <FontAwesomeIcon
                  icon={faMessage}
                  style={{ marginRight: "1rem" }}
                />
                Envoyer message
              </p>
              {showMessage && (
                <form>
                  <input type="hidden" name="id" value={livreur.telephone} />
                  <textarea
                    className="form-control"
                    rows="3"
                    placeholder="Votre message"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </form>
              )}
              <p>
                <FontAwesomeIcon
                  icon={faPhone}
                  style={{ marginRight: "1rem" }}
                />
                {livreur.telephone}
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ marginRight: "1rem" }}
                />
                {livreur.telephone}
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              fermer
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                let data = {
                  message: message,
                  telephone: livreur.telephone,
                };
                fetch("http://127.0.0.1:8001/api/messaging", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(data),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log(data);
                  });
                handleClose();
              }}
            >
              Contacter Livreur
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 4rem;

  @media (max-width: 1040px) {
    padding: 2rem;
  }

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

const Header = styled.div`
  background: #292d31;
  height: auto;
  width: 100%;
  display: flex;
  margin-top: 35px;
  margin-bottom: 1rem;
  @media (max-width: 1040px) {
    display: none;
  }

  div.bouton {
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    gap: 5rem;
  }

  div.bouton p.UOne {
    background: #f2a401;
    border-radius: 10px;
    padding-top: 40px;
    text-align: center;
    margin-top: 20px;
    padding: 1rem;
    margin-left: 1rem;
  }

  div.bouton p.UOne a {
    background: #f2a401;
    border: none;
    color: #fff;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
    text-decoration: none;
  }

  div.bouton p.Dtwo {
    background: #f2a401;
    border-radius: 10px;
    text-align: center;
    padding: 1rem;
    margin-top: 1rem;
  }

  div.bouton p.Dtwo button {
    background: #f2a401;
    color: #ffffff;
    margin-top: 35px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    border-style: none;
    cursor: pointer;
  }
`;

export default ChercherLivreur;
