import defaultPageHeaderImage from "../assets/images/tanya-barrow-wMSm7fnHOEI-unsplash.jpg";
import snakePlantImage from "../assets/images/madalyn-cox-wfE0xFOLaUY-unsplash.jpg";
import spiderPlantImage from "../assets/images/susan-wilkinson-Mfpygdu4A0E-unsplash.jpg";
import fiddleLeafFigImage from "../assets/images/emily-Yw-tLAhLCwk-unsplash.jpg";
import generalInfoImage from "../assets/images/huy-phan-dM317CbttyY-unsplash.jpg";

export default function DefaultPage() {
	return (
        <>
            <div className="page-hero">
                <img className="hero-image" src={defaultPageHeaderImage} alt="Flower plants" />
                <div className="website-intro">
                    <h1>Welcome to FlowerPlant!</h1>
                    <p>FlowerPlant helps plant lovers explore care guides<br/> and manage their personal collections.</p>
                </div>
            </div>
            <div className="general-info">
                <h2>What your plants need</h2>
                <div className="general-info-content">
                    <p>
                        Most houseplants thrive when you focus on a few simple, consistent basics. <br/><br/> Start by giving them the right light for their specific needs, then water only when the top layer of soil feels dry rather than sticking to a strict schedule. Use well-draining soil and a pot with drainage holes to protect the roots from rot, and keep leaves clean while trimming away any dead growth. Regularly checking for pests helps you catch problems early, and during the active growing season a light feeding every few weeks can encourage healthy growth—while in colder months, less water and little to no fertilizer is usually best. <br/><br/> Above all, gentle, steady care and paying attention to your plant’s leaves and soil will always work better than sudden changes.
                    </p>
                    <img className="general-info-image" src={generalInfoImage} alt="Indoor plants" />
                </div>
            </div>
            <div className="guides-section">
                <h2>Popular Plant Guides</h2>

                <div className="guides-list">
                    <div className="guides-item">
                        <img className="guide-item-image" src={snakePlantImage} alt="Snake plant" />
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
                        <img className="guide-item-image" src={spiderPlantImage} alt="Spider plant" />
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
                        <img className="guide-item-image" src={fiddleLeafFigImage} alt="Fiddle-Leaf Fig" />
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
