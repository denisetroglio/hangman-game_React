const Form = (props) => {

    const handleLastLetter = (ev) => {
        // if (
        //     ev.target.value.match(/^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]/) &&
        //     !userLetters.includes(ev.target.value)
        // ) {
        props.changeForm(ev.currentTarget.value);
        // setLastLetter(ev.currentTarget.value);
        // setUserLetters([...userLetters, ev.currentTarget.value]);
        // }
    };

    return (
        <form className='form'>
            <label className='title' htmlFor='last-letter'>
                Escribe una letra:
            </label>
            <input
                autoComplete='off'
                className='form__input'
                maxLength='1'
                type='text'
                name='last-letter'
                id='last-letter'
                // value={lastLetter}
                onChange={handleLastLetter}
            />
        </form>
    )
};

export default Form;
