import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";

const EspaceClient = () => {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    data.envoyeur_id = JSON.parse(localStorage.getItem("login")).cid;

    reset();

    envoiDataPost(data);
  };

  const [data, setData] = useState({
    numero: "",
    nombreColis: "",
    poids: "",
    lieuDepart: "",
    lieuDestination: "",
    residenceAdresser: "",
    dateEnregistrement: "",
    Description: "",
    uploadPhoto: "",
  });
  function envoiDataPost(data) {
    const url = "http://127.0.0.1:8000/api/commandes";

    Axios.post(url, data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setMsg(res.data.success);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <FormulaireClient>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HeaderContent>
            <div className="bouton">
              {/* <p onClick={() => logOut()} className="UOne">
                <a>Deconnexion</a>
              </p> */}
              <p className="Dtwo">
                <button>Creer commande</button>
              </p>
            </div>
          </HeaderContent>
          <div className="container">
            <h4>Formulaire d’ enregistrement du colis</h4>
          </div>
          {msg !== "" && (
            <div id="success">
              <p>{msg}</p>
            </div>
          )}
          <div className="form-group">
            <label htmlFor="exampleInputNombre ">Nombre de colis</label>
            <input
              type="number"
              name="nombreColis"
              className="form-control"
              id="exampleInputNombre"
              placeholder="Enter le nombre de colis"
              {...register("nombreColis", { required: true })}
            />
            <small className="valid">
              {errors.nombreColis && <span>Ce champ est obligatoire</span>}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPoids">Poids</label>
            <input
              type="text"
              name="poids"
              className="form-control"
              placeholder="Enter le poids"
              {...register("poids", { required: true })}
            />
            <small className="valid">
              {errors.poids && <span>Ce champ est obligatoire</span>}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLieu">Lieu de depart </label>
            <input
              type="text"
              name="lieuDepart"
              className="form-control"
              placeholder="LieuDepart"
              {...register("lieuDepart", { required: true })}
            />
            <small className="valid">
              {errors.lieuDepart && <span>Ce champ est obligatoire</span>}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputLieu">Lieu de destination</label>
            <input
              type="text"
              name="lieuDestination"
              className="form-control"
              placeholder="LieuDestination"
              {...register("lieuDestination", { required: true })}
            />
            <small className="valid">
              {errors.lieuDestination && <span>Ce champ est obligatoire</span>}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputAdresse">AdresseRésident</label>
            <input
              type="text"
              name="residenceAdresse"
              className="form-control"
              placeholder="Enter votre Adresse"
              {...register("residenceAdresse", { required: true })}
            />
            <small className="valid">
              {errors.residenceAdresse && <span>Ce champ est obligatoire</span>}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputDesc">Description</label>
            <textarea
              type="text"
              name="Description"
              className="form-control"
              placeholder="Description"
              {...register("Description", { required: true })}
            />
            <small className="valid">
              {errors.Description && <span>Ce champ est obligatoire</span>}
            </small>
          </div>
        </form>
      </FormulaireClient>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
`;

const HeaderContent = styled.div`
  div {
    background: #292d31;
    width: 100%;
    height: auto;
    padding: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }

  div.bouton p.UOne {
    background: #f2a401;
    border-radius: 10px;
    text-align: center;
  }

  div.bouton p.UOne a {
    text-decoration: none;
    color: #ffffff;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    cursor: pointer;
  }

  div.bouton p.Dtwo {
    background: #f2a401;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    border: none;
  }

  p.Dtwo button {
    background: #f2a401;
    color: #ffffff;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    border-style: none;
    cursor: pointer;
  }
`;

const FormulaireClient = styled.div`
  form div.container h4 {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    color: #292d31;
  }
  div#success {
    background-color: hsl(138, 80%, 78%);
    width: 40%;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
  }
  div#success p {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    color: hsl(148, 76%, 30%);
  }
  form {
    background: #eff1f5;
    padding: 20px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
  }

  .form-group label {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  .form-group input {
  }

  .form-group textarea {
  }

  .form-group small.valid {
    color: red;
  }
`;

export default EspaceClient;
