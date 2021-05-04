import React, { useEffect } from 'react';
import { getGames, getTopGames, searchCategories } from '../../api/twitch';
import useProfile from '../../hooks/useProfile';
import classes from './navbar.module.css';
import {useState} from "react"



const Navbar = (props) => {
  const { loading, error, user } = useProfile();
  const [data,setData] = useState([])
  const [Cat, setCate] = useState([])
  
  getTopGames({after: '',before: '',first: 10,width: '188',height: '250',})
  .then(response=> setData(response.data))
  
  function getTop(){  
    props.setTopGames(data)
  }

  function setCat(){
    searchCategories({query:"/"})
    .then(response=> {
      console.log(response.data)
      setCate(response.data)})
     
    setCategoriesinprops()
      
  }

  function setCategoriesinprops(){
    props.setCat(Cat)
  }
  
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__item}>
        <a href="#" onClick={setCat}>Sfoglia categorie</a>
        <a href="#" onClick={getTop}>Top games</a>
      </div>

      <div className={classes.navbar__item}>
        {!loading ? (
          <img
            src={user.profile_image_url}
            className={classes.avatar}
            alt="Profile"
            width={60}
          />
        ) : (
          <div className={classes.avatar} style={{ width: 60, height: 60 }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
