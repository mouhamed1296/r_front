import { Routes, Route, useNavigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import ChercherLivreur from "./pages/ChercherLivreur";
import ContacterLivreur from "./pages/ContacterLivreur";
import EspaceClient from "./pages/EspaceClient";
import EspaceLivreur from "./pages/EspaceLivreur";
import SuivreColis from "./pages/SuivreColis";
import Dashboard from "./pages/Dashboard";
import AuthForm from "./pages/AuthForm";
import Layout from "./Layout";
import Header from "./components/Header";
import CommandesClient from "./pages/CommandesClient";
import Livraison from "./pages/Livraison";
import SideBar from "./components/SideBar";

import { useState, useEffect } from "react";

function App() {
  // if(!token) {
  //   localStorage.setItem('login', JSON.stringify({
  //     login: false,
  //     token: null
  //   }));

  return (
    <Layout>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="chercherLivreur" element={<ChercherLivreur />} />
          <Route path="contacterLivreur" element={<ContacterLivreur />} />
          <Route path="espaceClient" element={<EspaceClient />} />
          <Route path="espaceLivreur" element={<EspaceLivreur />} />
          <Route path="suivreColis" element={<SuivreColis />} />
          <Route path="commandes" element={<CommandesClient />} />
          <Route path="livraison" element={<Livraison />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
