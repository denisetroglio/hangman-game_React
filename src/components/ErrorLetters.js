const ErrorLetters = (props) => {
  const renderErrorLetters = () => {
    return props.userLetters
      .filter((eachLetter) => {
        return !props.wordLetters.includes(eachLetter);
      })
      .map((eachLetter) => {
        return <li className='letter'>{eachLetter}</li>;
      });
  };

  return <ul className='letters'>{renderErrorLetters()}</ul>;
};

export default ErrorLetters;
