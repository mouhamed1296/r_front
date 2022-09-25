import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    reset();

    PostForm(data);
  };

  const [data, setData] = useState({
    roleCompte: "",
    civilite: "",
    prenom: "",
    nom: "",
    email: "",
    password: "",
    telephone: "",
    adresse: "",
    dateOuverture: "",
    disponibilite: "",
  });

  function PostForm(data) {
    const url = "http://127.0.0.1:8000/api/register";

    Axios.post(url, data)
      .then((res) => {
        console.log(res);

        navigate("/auth");
      })
      .catch((err) => console.log(err));
  }

  return (
    <Wrapper>
      <ContentForm>
        <HeaderForm>
          <h4>Creez votre compte</h4>
        </HeaderForm>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group1">
            <label htmlFor="Compte">Type de compte</label>
            <input
              type="radio"
              id="client"
              name="roleCompte"
              value="client"
              {...register("roleCompte", { required: true })}
            />
            <label htmlFor="client" className="client">
              Client
            </label>
            <input
              type="radio"
              id="livreur"
              name="roleCompte"
              value="livreur"
              {...register("roleCompte", { required: true })}
            />
            <label htmlFor="livreur" className="livreur">
              Livreur
            </label>
          </div>
          <div className="form-group2">
            <label htmlFor="Name">Personne</label>
            <div>
              <select
                className="form-select"
                name="civilite"
                {...register("civilite", { required: true })}
              >
                <option value="monsier">Mr</option>
                <option value="madame">Mme</option>
              </select>
              <div className="Input">
                <input
                  type="text"
                  className="form-control"
                  id="Firstame"
                  name="prenom"
                  placeholder="Prenom"
                  {...register("prenom", { required: true })}
                />
                <small className="validate">
                  {errors.prenom && (
                    <span className="error">Le prenom est obligatoire</span>
                  )}
                </small>
              </div>
              <div className="para">
                <input
                  type="text"
                  className="form-control"
                  id="Lastname"
                  name="nom"
                  placeholder="Nom"
                  {...register("nom", { required: true })}
                />
                <small className="validate">
                  {errors.nom && (
                    <span className="error">Le nom est obligatoire</span>
                  )}
                </small>
              </div>
            </div>
          </div>
          <div className="form-group3">
            <div className="adresse">
              <label htmlFor="Email1">Adresse Email</label>
              <input
                type="email"
                className="form-control"
                id="Email1"
                name="email"
                placeholder="nom@domaine.com"
                {...register("email", { required: true })}
              />
              <small className="validate">
                {errors.email && (
                  <span className="error">L'email est obligatoire</span>
                )}
              </small>
            </div>
            <div className="motpass">
              <label htmlFor="Password1">Mot de passe</label>
              <input
                type="password"
                className="form-control"
                id="Password1"
                name="password"
                placeholder="Mot de passe"
                {...register("password", { required: true })}
              />
              <small className="validate">
                {errors.password && (
                  <span className="error">Le mot de passe est obligatoire</span>
                )}
              </small>
            </div>
          </div>
          <div className="form-group4">
            <label htmlFor="Phone">Numero de telephone</label>
            <input
              type="text"
              className="form-control"
              id="Phone"
              name="telephone"
              placeholder="+33 6 XX XX XX XX"
              {...register("telephone", { required: true })}
            />
            <small className="validate">
              {errors.telephone && (
                <span className="error">
                  Le numero de telephone est obligatoire
                </span>
              )}
            </small>
          </div>
          <div className="form-group8">
            <label htmlFor="Dispo">Disponibilite</label>
            <div>
              <input
                type="radio"
                id="bool"
                name="disponibilite"
                value="1"
                {...register("disponibilite", { required: true })}
              />
              <label htmlFor="client" className="client">
                Oui
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="bool"
                name="disponibilite"
                value="0"
                {...register("disponibilite", { required: true })}
              />
              <label htmlFor="livreur" className="livreur">
                Non
              </label>
            </div>
          </div>
          <div className="form-group6">
            <input
              type="checkbox"
              id="use"
              name="use"
              {...register("use", { required: true })}
            />
            <label for="use">
              J’accepte les termes et conditions d’utilisation
            </label>
          </div>
          <FooterForm>
            <div className="One">
              <button type="submit">Creer un compte</button>
            </div>
            <div className="buttonTwo">
              <button type="button" onClick={() => reset()}>
                Effacer
              </button>
            </div>
          </FooterForm>
        </form>
      </ContentForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const HeaderForm = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  margin-bottom: 1rem;
  background: #f2a401;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h4 {
    margin: 0;
    padding: 0;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    color: #ffffff;
  }
`;

const ContentForm = styled.div`
  padding-top: 2rem;
  padding-bottom: 2rem;
  form div.form-group1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  form div.form-group1 label {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  form div.form-group1 input[type="radio"] {
  }

  form div.form-group1 label.client {
  }

  form div.form-group1 label.livreur {
  }

  form div.form-group2 {
    display: flex;
    flex-direction: column !important;
    gap: 1rem;
  }

  form div.form-group2 div {
    display: flex;
    flex-direction: column !important;
    gap: 0.5rem;
  }

  form div.form-group2 div select {
    width: 50%;
  }

  form div.form-group2 label {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  div select.form-select {
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }

  form div.form-group2 input[type="text"] {
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }

  form div.form-group2 div {
  }

  form div.form-group2 div.Input {
  }

  form div.form-group2 div.para {
  }

  form div.form-group3 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  form div.form-group3 label {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  form div.form-group3 input[type="email"] {
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }

  form div.form-group3 input[type="password"] {
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }

  form div.form-group3 div.address {
  }

  form div.form-group3 div.motpass {
  }

  form div.form-group4 {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  form div.form-group4 label {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  form div.form-group4 input[type="text"] {
    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.5);
  }

  form div.form-group6 {
  }
  form div.form-group6 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  form div.form-group6 label {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292d31;
  }

  form div.form-group6 input[type="checkbox"] {
    background: #eff1f5;
    border: 1px solid #ffffff;
    border-radius: 3px;
  }

  form div.form-group2 {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1rem;
  }

  form div.form-group8 label {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 16px;
    color: #292d31;
  }

  form div.form-group8 input[type="radio"] {
  }

  form div.form-group8 label.client {
  }

  form div.form-group8 label.livreur {
  }

  div small.validate {
    color: red;
  }
`;

const FooterForm = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #f2a401;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div.One {
  }

  div.One button[type="submit"] {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292d31;
    background: #ffffff;
    border: 2px solid #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 1rem;
    cursor: pointer;
  }

  div.buttonTwo {
  }

  div.buttonTwo button[type="button"] {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292d31;
    background: #ffffff;
    border: 2px solid #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 1rem;
    cursor: pointer;
  }
`;

export default Login;
