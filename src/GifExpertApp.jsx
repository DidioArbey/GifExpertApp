import { useState } from "react"
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one Punch']);

    const onAddCategory = (onNewCategory) => {
        if (categories.includes(onNewCategory)) return;
        // console.log(onNewCategory);
        setCategories([onNewCategory, ...categories]);
    }


    return (
        <>
            <h1>  GifExpertApp </h1>
            <AddCategory
                onNewCategory={value => onAddCategory(value)}
            />

            {
                categories.map((category) => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }

        </>

    )
}
