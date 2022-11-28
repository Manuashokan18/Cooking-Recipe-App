import React from 'react'

export const  RecipeIndex =({alphaIndex})=>  {
    const alpha =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var num = 0;
    return (
    <>
   {
    alpha.map(item =>{
        return(
            <div className="numBox" key={num++} onClick={()=>alphaIndex(item)}>
            <h3>{item}</h3>
            </div>
        )
    })
   }
   </>
  )
}
