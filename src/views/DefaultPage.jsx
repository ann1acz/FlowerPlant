export default function DefaultPage() {
	return (
        <>
            <div className="website-intro">
                <h2>Welcome to Flower Plant!</h2>
                <p>We are a platform dedicated to plant enthusiasts, helping you take care of your plants and discover new ones.</p>
            </div>
            <div className="guides-section">
                <h2>Popular Plant Guides</h2>
                <div className="guides-list">
                    <div className="guides-item">
                        <h3>Common Name</h3>
                        <p>Snake plant</p>
                        <h3>Scientific Name</h3>
                        <p>Sansevieria trifasciata</p>
                        <h3>Light</h3>
                        <p>Low to bright indirect light</p>
                        <h3>Watering</h3>
                        <p>Every 2-3 weeks</p>
                        <h3>Soil</h3>
                        <p>Well-draining cactus or succulent mix</p>
                        <h3>Level</h3>
                        <p>Beginner</p>
                    </div>
                    <div className="guides-item">
                        <h3>Common Name</h3>
                        <p>Spider plant</p>
                        <h3>Scientific Name</h3>
                        <p>Chlorophytum comosum</p>
                        <h3>Light</h3>
                        <p>Bright, indirect light</p>
                        <h3>Watering</h3>
                        <p>Every 1-2 weeks</p>
                        <h3>Soil</h3>
                        <p>Well-draining potting mix</p>
                        <h3>Level</h3>
                        <p>Intermediate</p>
                    </div>
                    <div className="guides-item">
                        <h3>Common Name</h3>
                        <p>Fiddle-Leaf Fig</p>
                        <h3>Scientific Name</h3>
                        <p>Ficus lyrata</p>
                        <h3>Light</h3>
                        <p>Bright, indirect light (6+ hours)</p>
                        <h3>Watering</h3>
                        <p>When top 2-3 inches of soil are dry</p>
                        <h3>Soil</h3>
                        <p>Well-draining peat-based mix with perlite</p>
                        <h3>Level</h3>
                        <p>Expert</p>                    
                    </div>
                </div>
            </div>
        </>
  );
}
