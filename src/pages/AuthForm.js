import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import swal from 'sweetalert';

const AuthForm = () => {
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    login(data);
  };

  const [error, setError] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function login(data) {
    fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 401) setError("unauthorized");
        return res.json();
      })
      .then((data) => {
        if (data.roleCompte === "livreur") {
          console.log(data);
          localStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              token: data.token,
              lid: data.uid,
              roleCompte: data.roleCompte,
            })
          );
          navigate("/dashboard/livraison", { replace: true });
        } else if (data.roleCompte === "client") {
          localStorage.setItem(
            "login",
            JSON.stringify({
              login: true,
              token: data.token,
              cid: data.uid,
              roleCompte: data.roleCompte,
            })
          );
          // return (" Authentification réussie ! " , " Bienvenue sur votre espace ! " , " succès " );

          // swal ( " Authentification réussie ! " , " Bienvenue sur votre espace ! " , " succès " );
          navigate("/dashboard/espaceClient", { replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <Wrapper>
      <ContentForm>
        <HeaderForm>
          <h4>Connecter vous a votre compte</h4>
        </HeaderForm>
        {error !== "" && (
          <div id="error">
            <p>
              {error && error === "unauthorized"
                ? "Email ou mot de passe incorrect"
                : null}
            </p>
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <div className="firstColumn">
              <div>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Adresse e-mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Entrez-votre email"
                  name="email"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Mot de passe
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Entrez-votre mot de pass"
                  {...register("password", { required: true })}
                />
              </div>
            </div>
            <div className="secondColumn">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Se souvenir de moi
              </label>
            </div>
            <div className="thirdColumn">
              <p className="para1">
                Mot de passe oublié?<span className="forget">Cliquez ici</span>{" "}
              </p>
            </div>
          </div>
          <FooterForm>
            <div className="One">
              <button type="submit">S’identifier</button>
            </div>
            <div className="Two">
              <Link to={"/login"}>
                Nouvel utilisateurs?<span>S'inscrire</span>
              </Link>
            </div>
          </FooterForm>
        </form>
      </ContentForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  /*margin-left: 372px;
  margin-top: 110px;*/
  padding: 1rem;
`;

const HeaderForm = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem;
  background: #f2a401;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h4 {
    text-align: center;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 33px;
    color: #ffffff;
  }
`;

const ContentForm = styled.div`
  form {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  div.form-group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  div.firstColumn {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  div.form-group div.firstColumn label {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  div#error {
    background-color: hsl(0, 94%, 85%);
    width: 40%;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
  }
  div#error p {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    color: hsl(0, 71%, 35%);
  }

  div.form-group div.firstColumn input {
    border: 0.1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
  }

  form div.form-group div.secondColumn label {
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292d31;
  }

  form div.form-group div.secondColumn {
    display: flex;
    margin-top: 1.5rem;
    align-items: center;
    gap: 0.5rem;
  }

  form div.form-group div.secondColumn input[type="checkbox"] {
    margin-top: 0;
  }

  form div.form-group div.thirdColumn p {
    margin-top: 30px;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #292d31;
  }

  form div.form-group div.thirdColumn p span.forget {
    color: #f2a401;
    margin-left: 5px;
    cursor: pointer;
  }
`;

const FooterForm = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  width: 100%;
  height: auto;
  background: #f2a401;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  div.One {
    width: 100%;
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
    padding: 2rem;
    cursor: pointer;
    @media (max-width: 500px) {
      padding: 1rem;
    }
  }

  div.Two {
    width: 100%;
    display: flex;
    align-items: flex-end;
    padding: 0.5rem;
  }

  div.Two a {
    text-decoration: none;
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
    cursor: pointer;
  }
  div.Two a span {
    text-decoration: underline dotted;
  }
  div.Two a span:hover {
    color: #f2a401;
  }
`;

export default AuthForm;
