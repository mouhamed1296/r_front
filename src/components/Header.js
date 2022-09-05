import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

// import { createMedia } from '@artsy/fresnel';

const Header = () => {
  const token = JSON.parse(localStorage.getItem("login"));
  const navigate = useNavigate();

  function logOut() {
    localStorage.setItem("login", JSON.stringify(null));
    navigate("/auth", { replace: true });
  }

  return (
    <Wrapper>
      <InfosHeaderTop>
        <p>Horaires : 08h00 - 18h00 | du lundi au samedi</p>
      </InfosHeaderTop>
      <Brand>
        <img src={"/images/logoHeader.png"} alt="logoHeader" />
      </Brand>
      <Nav>
        {!token ? (
          <>
            <Link to="/">Accueil</Link>
            <Link to="/">Nos services</Link>
            <Link to="APropos">A propos</Link>
            <Link to="Contact">Contact</Link>
          </>
        ) : token.roleCompte === "client" ? (
          <>
            <Link to="/dashboard/espaceClient">Espace Client</Link>
            <Link to="/dashboard/chercherLivreur">Chercher livreur</Link>
            <Link to="/dashboard/commandes">Mes commandes</Link>
            <Link to="/dashboard/suivreColis">Suivi Colis</Link>
          </>
        ) : (
          <Link to="/dashboard/livraison">Commandes à livrer</Link>
        )}
      </Nav>
      {/*<Search>
        <img src={"/images/search1.png"} alt="search" />
      </Search>*/}
      {!token ? (
        <>
          <LogIn>
            <div>
              <Link to={"/auth"}>Se connecter</Link>
            </div>
          </LogIn>
          <SingUp>
            <div>
              <Link to={"/login"}>S'inscrire</Link>
            </div>
          </SingUp>
        </>
      ) : (
        <LogOut>
          <div onClick={() => logOut()}>
            <a>Se déconnecter</a>
          </div>
        </LogOut>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  weight: 1905px;
  height: 140.7px;
  margin-left: 0;
  margin-top: 18px;
  background-color: #fff;
  box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.12);
`;

const InfosHeaderTop = styled.div`
  height: 25px;
  weight: 472px;
  font-family: "Epilogue", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 24px;
  line-height: 25px;
  color: #a3aaba;
`;

const Brand = styled.div`
  width: 211px;
  height: 72px;
  margin-left: 290px;
  margin-top: 36px;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  list-style: none;
  gap: 2rem;
  height: 18.47px;
  margin-left: 664px;
  margin-top: -30px;
  font-family: "Epilogue", sans-serif;
  font-style: normal;

  a {
    text-decoration: none;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: #292d31;
  }

  a:hover {
    color: #f2a401;
  }
`;

const Search = styled.div`
  width: 16px;
  height: 16px;
  margin-left: 1149px;
  margin-top: -15px;
  cursor: pointer;
`;

const LogIn = styled.div`
  width: 181px;
  height: 15.47px;
  margin-left: 1345px;
  margin-top: 27px;

  div {
    box-sizing: border-box;
    margin-top: -50px;
  }

  a {
    text-decoration: none;
    width: 181px;
    height: 42.21px;
    background: #fff;
    border: 2px solid #f2a401;
    border-radius: 46px;
    padding: 12px 20px;
    cursor: pointer;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    background-color: #fff;
    color: #292d31;
    margin-left: -46%;
  }
`;
const SingUp = styled.div`
  width: 129px;
  height: 40.21px;
  margin-left: 1475px;
  margin-top: -24px;

  div {
    box-sizing: border-box;
    margin-top: 9px;
  }

  a {
    text-decoration: none;
    width: 129px;
    height: 42.21px;
    background: #fff;
    border: 2px solid #f2a401;
    border-radius: 46px;
    padding: 12px 20px;
    cursor: pointer;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    background-color: #fff;
    color: #292d31;
  }
`;
const LogOut = styled.div`
  width: 181px;
  height: 15.47px;
  margin-left: 1720px;
  margin-top: -27px;

  div {
    box-sizing: border-box;
    margin-top: -42px;
  }

  a {
    text-decoration: none;
    width: 181px;
    height: 42.21px;
    background: #fff;
    border: 2px solid #f2a401;
    border-radius: 46px;
    padding: 12px 20px;
    cursor: pointer;
    font-family: "Epilogue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    background-color: #fff;
    color: #292d31;
    margin-left: -46%;
  }
`;

export default Header;
