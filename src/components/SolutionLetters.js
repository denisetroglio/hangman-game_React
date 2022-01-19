const SolutionLetters = (props) => {
  const renderSolutionLetters = () => {
    return props.wordLetters.map((eachLetter) => {
      if (props.userLetters.includes(eachLetter)) {
        return <li className='letter'>{eachLetter}</li>;
      } else {
        return <li className='letter'></li>;
      }
    });
  };
  return <ul className='letters'>{renderSolutionLetters()}</ul>;
};

export default SolutionLetters;
