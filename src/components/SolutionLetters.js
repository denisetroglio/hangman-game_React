const SolutionLetters = (props) => {
  const renderSolutionLetters = () => {
    return props.wordLetters.map((eachLetter, index) => {
      if (props.userLetters.includes(eachLetter)) {
        return <li key={index} className='letter'>{eachLetter}</li>;
      } else {
        return <li key={index} className='letter'></li>;
      }
    });
  };
  return <ul className='letters'>{renderSolutionLetters()}</ul>;
};

export default SolutionLetters;
