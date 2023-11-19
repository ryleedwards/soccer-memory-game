import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Score from './components/Score';
import Board from './components/Board';

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('teams') === null) {
      fetchTeamsData();
    }

    setTeams(JSON.parse(localStorage.getItem('teams')));

    async function fetchTeamsData() {
      const url =
        'https://api-football-v1.p.rapidapi.com/v3/teams?league=39&season=2023';
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '70f3982b49mshfb805199763edd5p152ae5jsn9db973beaaa0',
          'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        const resultTeamsArray = result.response.map(
          (responseItem) => responseItem.team
        );
        localStorage.setItem('teams', JSON.stringify(resultTeamsArray));
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <Score />
      <Board teams={teams} />
    </>
  );
}

export default App;
