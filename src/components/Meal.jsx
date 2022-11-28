import React from 'react'
import { useState,useEffect } from 'react'
import { Mealitem } from './Mealitem'
import { RecipeIndex } from './RecipeIndex'

export  const Meal = ()=> {
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false);
    const [search, setSearch] = useState("")
    useEffect(() => {
      fetch(url).then(res=>res.json()).then(data=>{
        console.log(data);
        setItem(data.meals);
        setShow(true);
      })   
    }, [url])

    const setIndex = (alpha) => {
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`);
    };

    const searchRecipe = (evt) =>{
        if(evt.key === "Enter"){
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }
    
  return (
    <>
    <div className='main'>
        
        <div className="heading">
            <h1>Search your food recipe</h1>
            <h4> adding some sample text</h4>
        </div>

        <div className="searchBox">
            <input type="text" className='search-bar' 
            onChange={e=>setSearch(e.target.value)} 
            onKeyPress={searchRecipe} />
        </div>

        <div className="container">
            { 
            show ? <Mealitem data={item}/> : <h1>"Not Found"</h1>
            }    
        </div>

        <div className="indexContainer">
            <RecipeIndex alphaIndex={(alpha)=>setIndex(alpha)}/>
        </div>

    </div>
    </>
  )
}
