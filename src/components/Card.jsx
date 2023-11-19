export default function Card(props) {
  <div className='card--container' onClick={props.handleCardClick}>
    <img src={props.logo} alt='' />
    <h3 className='card--team-name'>{props.teamName}</h3>
  </div>;
}
