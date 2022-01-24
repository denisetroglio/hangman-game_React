const SolutionLetters = ({ wordLetters, userLetters }) => {
  const renderSolutionLetters = () => {
    return wordLetters.map((eachLetter, index) => {
      if (userLetters.includes(eachLetter)) {
        return <li key={index} className='letter'>{eachLetter}</li>;
      } else {
        return <li key={index} className='letter'></li>;
      }
    });
  };
  return <ul className='letters'>{renderSolutionLetters()}</ul>;
};

export default SolutionLetters;
