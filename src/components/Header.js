import React, { useState } from "react";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// import { createMedia } from '@artsy/fresnel';

const Header = () => {
  const token = JSON.parse(localStorage.getItem("login"));
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function logOut() {
    localStorage.setItem("login", JSON.stringify(null));
    if (showMobileMenu) {
      setShowMobileMenu(false);
    }
    navigate("/auth", { replace: true });
  }

  const toggleMobileMenu = () => {
    if (showMobileMenu) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(true);
    }
  };

  return (
    <>
      <Wrapper>
        <InfosHeaderTop>
          <p>Horaires : 08h00 - 18h00 | du lundi au samedi</p>
        </InfosHeaderTop>
        <Container>
          <Brand>
            <img src={"/images/logoHeader.png"} alt="logoHeader" />
          </Brand>
          <Nav>
            {!token ? (
              <>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/">Nos services</NavLink>
                <NavLink to="APropos">A propos</NavLink>
                <NavLink to="Contact">Contact</NavLink>
                <LogIn>
                  <div>
                    <NavLink to={"/auth"}>Se connecter</NavLink>
                  </div>
                </LogIn>
                <SingUp>
                  <div>
                    <NavLink to={"/login"}>S'inscrire</NavLink>
                  </div>
                </SingUp>
              </>
            ) : token.roleCompte === "client" ? (
              <>
                <NavLink to="/dashboard/espaceClient">Espace Client</NavLink>
                <NavLink to="/dashboard/chercherLivreur">
                  Chercher livreur
                </NavLink>
                <NavLink to="/dashboard/commandes">Mes commandes</NavLink>
                <LogOut>
                  <div onClick={() => logOut()}>
                    <a>Se déconnecter</a>
                  </div>
                </LogOut>
              </>
            ) : (
              <>
                <NavLink to="/dashboard/livraison">Commandes à livrer</NavLink>
                <LogOut>
                  <div onClick={() => logOut()}>
                    <a>Se déconnecter</a>
                  </div>
                </LogOut>
              </>
            )}
          </Nav>
          <MobileMenuToggler>
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              onClick={() => toggleMobileMenu()}
            />
          </MobileMenuToggler>
          {/*<Search>
        <img src={"/images/search1.png"} alt="search" />
      </Search>*/}
        </Container>
      </Wrapper>
      <MobileMenu show={showMobileMenu}>
        <MobileNav>
          {!token ? (
            <>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/">
                Accueil
              </NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="/">
                Nos services
              </NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="APropos">
                A propos
              </NavLink>
              <NavLink onClick={() => setShowMobileMenu(false)} to="Contact">
                Contact
              </NavLink>
              <LogIn>
                <div>
                  <NavLink
                    onClick={() => setShowMobileMenu(false)}
                    to={"/auth"}
                  >
                    Se connecter
                  </NavLink>
                </div>
              </LogIn>
              <SingUp>
                <div>
                  <NavLink
                    onClick={() => setShowMobileMenu(false)}
                    to={"/login"}
                  >
                    S'inscrire
                  </NavLink>
                </div>
              </SingUp>
            </>
          ) : token.roleCompte === "client" ? (
            <>
              <NavLink
                onClick={() => setShowMobileMenu(false)}
                to="/dashboard/espaceClient"
              >
                Espace Client
              </NavLink>
              <NavLink
                onClick={() => setShowMobileMenu(false)}
                to="/dashboard/chercherLivreur"
              >
                Chercher livreur
              </NavLink>
              <NavLink
                onClick={() => setShowMobileMenu(false)}
                to="/dashboard/commandes"
              >
                Mes commandes
              </NavLink>
              <LogOut>
                <div onClick={() => logOut()}>
                  <a>Se déconnecter</a>
                </div>
              </LogOut>
            </>
          ) : (
            <>
              <NavLink
                onClick={() => setShowMobileMenu(false)}
                to="/dashboard/livraison"
              >
                Commandes à livrer
              </NavLink>
              <LogOut>
                <div onClick={() => logOut()}>
                  <a>Se déconnecter</a>
                </div>
              </LogOut>
            </>
          )}
        </MobileNav>
      </MobileMenu>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  margin-left: 0;
  margin-top: 18px;
  background-color: #fff;
  box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.12);
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5rem;
  padding: 1rem;
  @media (max-width: 1040px) {
    justify-content: space-between;
    padding: 1rem;
  }

  div {
    box-sizing: border-box;
  }
`;

const InfosHeaderTop = styled.div`
  height: 25px;
  font-family: "Epilogue", sans-serif;
  font-style: normal;
  font-weight: 400;
  text-align: center;
  font-size: 24px;
  line-height: 25px;
  color: #a3aaba;
`;

const Brand = styled.div`
  cursor: pointer;

  @media (max-width: 600px) {
    img {
      width: 100px;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  list-style: none;
  gap: 2rem;
  font-family: "Epilogue", sans-serif;
  font-style: normal;

  @media (max-width: 1092px) {
    gap: 1rem;
  }

  @media (max-width: 1040px) {
    display: none;
  }

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
  div {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
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
const SingUp = styled.div`
  div {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
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
  div {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
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

const MobileMenuToggler = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 1040px) {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }
`;

const MobileMenu = styled.div`
  display: ${(props) => (!props.show ? "none" : "block")};
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem;
  list-style: none;
  gap: 2rem;
  font-family: "Epilogue", sans-serif;
  font-style: normal;
  background-color: #fff;
  box-shadow: 0px 9px 12px rgba(0, 0, 0, 0.12);

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

export default Header;
