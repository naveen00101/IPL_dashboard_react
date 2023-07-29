// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'

import './index.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, teamsData: []}

  componentDidMount() {
    console.log(1)
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const statusCode = await response.statusCode
    console.log(2)
    console.log(statusCode)
    const data = await response.json()
    console.log(3)
    const {teams} = data
    const formattedData = teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({isLoading: false, teamsData: formattedData})
  }

  render() {
    const {isLoading, teamsData} = this.state

    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            className="logo-img"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="logo-text">IPL Dashboard</h1>
        </div>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <ul className="card-list-container">
            {teamsData.map(eachItem => (
              <TeamCard item={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
