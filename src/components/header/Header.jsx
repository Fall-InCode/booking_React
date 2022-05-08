import { faBed, faCar, faPlane, faArrowsToDot,  faTaxi } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"
import { } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  return (
    <div className="header">

      <div className="headerContainer">
        <div className="headerList">
        
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rental</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faArrowsToDot} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
          </div>
        </div>

        <h1 className="headerTitle">Stay more, save more. It’s Genius.</h1>

        <p className="headerDesc">
        Enjoy discounts and travel rewards at hundreds of thousands of properties worldwide
        </p>

        <button className="headerBtn">Sign in / Register</button>

      </div>
           
    </div>
  )
}

export default Header