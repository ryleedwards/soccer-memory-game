import Card from './Card';

export default function Board(props) {
  const cards = props.teams.map((team) => {
    return <Card key={team.id} logo={team.logo} teamName={team.name} />;
  });
  return <div className='main--board-container'>{cards}</div>;
}
