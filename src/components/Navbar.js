import AirbnbLogo from "../images/airbnb 1.png"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={AirbnbLogo} alt="airbnb--logo" className="navbar--logo" />
        </div>
    )
}