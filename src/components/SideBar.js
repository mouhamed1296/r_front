import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'


// const routes = [
//     {
//         path: "/dashboard",
//         name: "espaceClient",
//     }
// ]

const SideBar = ({children}) => {
  return (
    <div className='main-container'>
      <motion.div className='sidebar' animate={{with: "200px"}}>
        <div className='top_section'>
          <img src="./images/logoFooter.png" alt="logo" />
        </div>
        <div className='menus_section'>
          <ul className='links'>
            <li><NavLink to="/espaceClient">Espace Client</NavLink> </li>
            <li><NavLink to="/chercherLivreur">Chercher un livreur</NavLink> </li>
            <li><NavLink to="/contacterLivreur">Contacter un livreur</NavLink> </li>
            <li><NavLink to="/suivreColis">Suivre un colis</NavLink> </li>
          </ul>
        </div>



          

      </motion.div>
      <main>
        {children} 
      </main>
    </div>
  )
}

export default SideBar;
