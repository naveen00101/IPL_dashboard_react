// Write your code here
import './index.css'

const MatchCard = props => {
  const {item} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = item
  return (
    <li className="match-card-container">
      <img
        className="match-card-logo"
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <div className="text-con">
        <p className="match-card-heading">{competingTeam}</p>
        <p className="match-card-text">{result}</p>
      </div>
      <p className={matchStatus}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
