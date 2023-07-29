// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = details
  return (
    <div className="latestMatch-container">
      <div className="left-container">
        <p className="competing-team-text">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="text">{venue}</p>
        <p className="text">{result}</p>
      </div>

      <div className="center-container">
        <img
          className="latest-match-logo"
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>

      <div className="right-container">
        <p className="head">First Innings</p>
        <p className="text">{firstInnings}</p>
        <p className="head">Second Innings</p>
        <p className="text">{secondInnings}</p>
        <p className="head">Man of the Match</p>
        <p className="text">{manOfTheMatch}</p>
        <p className="head">Umpires</p>
        <p className="text">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
