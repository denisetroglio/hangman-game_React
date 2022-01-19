import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header";
import Dummy from "./Dummy";
import ErrorLetters from "./ErrorLetters";
import SolutionLetters from "./SolutionLetters";

function App() {
  const [word, setWord] = useState("katakroker");
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState();

  const wordLetters = word.split("");

  const handleLastLetter = (ev) => {
    if (
      ev.target.value.match(/^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]/) &&
      !userLetters.includes(ev.target.value)
    ) {
      setLastLetter(ev.currentTarget.value);
      setUserLetters([...userLetters, ev.currentTarget.value]);
    }
  };

  return (
    <div id='root'>
      <div className='page'>
        <Header />
        <main className='main'>
          <section>
            <div className='solution'>
              <h2 className='title'>Solución:</h2>
              <SolutionLetters
                wordLetters={wordLetters}
                userLetters={userLetters}
              />
            </div>
            <div className='error'>
              <h2 className='title'>Letras falladas:</h2>
              <ErrorLetters
                userLetters={userLetters}
                wordLetters={wordLetters}
              />
            </div>
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
          </section>
          {/* <button onClick={handleError}>test</button> */}
          <Dummy userLetters={userLetters} wordLetters={wordLetters} />
        </main>
      </div>
    </div>
  );
}

export default App;
