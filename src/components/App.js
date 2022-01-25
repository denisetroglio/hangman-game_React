import ReactDOM from "react-dom";
import { NavLink, Route, Switch } from "react-router-dom";
import "../styles/App.scss";
import { useEffect, useState } from 'react';
import Header from "./Header";
import Dummy from "./Dummy";
import ErrorLetters from "./ErrorLetters";
import SolutionLetters from "./SolutionLetters";
import Form from "./Form";
import Footer from "./Footer";
import Instructions from "./Instructions";
import Options from "./Options";
import Loading from "./Loading"
import callToApi from "../services/Api"

function App() {
  const [word, setWord] = useState("");
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    callToApi().then((responseData) => {
      setWord(responseData.body.Word);
      setIsLoading(false);
    });
  }, []);

  const wordLetters = word.split("");

  const changeForm = (value) => {
    if (
      value.match(/^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]/) &&
      !userLetters.includes(value)
    ) {
      setLastLetter(value);
      setUserLetters([...userLetters, value]);
    }
  };

  return (
    <div id='root'>
      <div className='page'>
        <Header />
        <main className='main'>
          <Loading loading={isLoading}></Loading>

          <Switch>
            <Route exact path='/'>
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

                <Form changeForm={changeForm} />
              </section>
            </Route>
            <Route exact path='/instructions'>
              <Instructions />
            </Route>
            <Route exact path='/Options'>
              <Options />
            </Route>
          </Switch>

          <Dummy userLetters={userLetters} wordLetters={wordLetters} />
        </main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
