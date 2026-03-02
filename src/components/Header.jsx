import { Link } from "react-router-dom";
import flowerplantLogo from "../assets/flowerplant_logo.svg";

export default function Header() {

    return (
        <header className="header">
            <nav>
                <div className="logo-nav">
                    <img src={flowerplantLogo} alt="flowerplant logo" width={30} height={30} />
                    <h2>FlowerPlant</h2>
                </div>
                <div className="nav-links">
                    <Link to='/'>Home</Link>
                    <Link to='/myPlants'>My Plants</Link>
                    <Link to='/About'>About</Link>
                </div>
            </nav>
        </header>
    )
}