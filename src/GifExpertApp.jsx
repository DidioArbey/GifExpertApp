import { useState } from "react"
import { AddCategory } from "./Components/AddCategory";

export const  GifExpertApp= () => {

    const [categories, setCategories] = useState(['one Puch','Dragon Ball']);

    const onAddCategory = () => {
        setCategories (['Valorant',...categories] );
    }


    return (
        <>
            <h1>  GifExpertApp </h1>

            <AddCategory setCategories={setCategories}/>



            <ol>
                {categories.map( category =>{
                    return <li key={category}> {category} </li>
                })}
            </ol>

        </>

    )
}
