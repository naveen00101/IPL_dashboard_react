// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {item} = props
  const {name, id, teamImageUrl} = item

  return (
    <li>
      <Link to={`/team-matches/${id}`} className="link-item">
        <div className="card-container">
          <img className="team-img" src={teamImageUrl} alt={name} />
          <div className="name-container">
            <p className="card-name">{name}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
