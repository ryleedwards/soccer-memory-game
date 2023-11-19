import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Score from './components/Score';
import Board from './components/Board';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    // Check if teams data is already stored locally
    if (localStorage.getItem('teams') === null) {
      // ... it is NOT stored locally, perform API call and store response
      fetchTeamsData();
    } else {
      // ... it IS stored locally, no need to call API, set state based on local storage
      setTeams(JSON.parse(localStorage.getItem('teams')));
    }

    // performs API call to retrieve teams and parse relevant data
    async function fetchTeamsData() {
      const url =
        'https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2023';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_API_FOOTBALL_KEY,
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        },
      };

      try {
        console.log(options);
        const response = await fetch(url, options);
        const result = await response.json();
        const resultTeamsArray = result.response.map(
          (responseItem) => responseItem.team
        );
        localStorage.setItem('teams', JSON.stringify(resultTeamsArray));
        setTeams(resultTeamsArray);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  function handleCardClick(team) {
    console.log(team);
  }

  return (
    <>
      <Navbar />
      <Score />
      {teams.length > 0 ? (
        <Board teams={teams} handleCardClick={handleCardClick} />
      ) : (
        <h3>Loading teams data...</h3>
      )}
    </>
  );
}

export default App;
