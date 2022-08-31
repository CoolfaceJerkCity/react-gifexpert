import React, { useState, Fragment } from 'react'
import {AddCategory, GifGrid} from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (NewCategory) => {
        if (categories.includes(NewCategory)) return;

        setCategories([NewCategory, ...categories])
    }

    return (
        <Fragment>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />

            {/* Listado de Gifs */}
            {categories.map(category => (
                <GifGrid key={category}
                    category={category} />
            ))}
        </Fragment>
    )
}