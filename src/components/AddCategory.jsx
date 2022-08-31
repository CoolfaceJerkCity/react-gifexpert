import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('One Punch');
    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    const onFormSubmit = (event) =>{
        event.preventDefault();

        if(inputValue.trim().length <= 1) return;

        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input
                type='text'
                placeholder='Buscar gifs...'
                onChange={onInputChange}
                value={inputValue}
            />
        </form>
    )
}