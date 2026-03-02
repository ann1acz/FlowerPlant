import aboutHeaderImage from "../assets/images/claire-ropnuDzd5sc-unsplash.jpg";
import "../css/about.css";

export default function About() {
    return (
        <>
            <div className="page-hero">
                <img className="hero-image" src={aboutHeaderImage} alt="Plants on a sunny shelf" />
                <div className="website-intro">
                    <h1>About</h1>
                </div>
            </div>
            <section className="about-section">
                <p>
                    FlowerPlant is a community for plant enthusiasts, gardeners, and beginners looking to learn about plant care.
                    The platform provides a user-friendly website where users can explore plant care guides and manage their
                    personal plant collections.
                </p>
            </section>
        </>
    );
}