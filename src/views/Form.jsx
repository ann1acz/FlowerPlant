import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/form.css";
import ImgNotFound from "../assets/images/imagenotfound.png";

export default function Form() {
    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [light, setLight] = useState("");
    const [watering, setWatering] = useState("");
    const [soil, setSoil] = useState("");
    const [level, setLevel] = useState("");
    const [imageData, setImageData] = useState("");
    const [imageName, setImageName] = useState("");
    const imageInputRef = useRef(null);

    let navigate = useNavigate();

    function handleImageChange(e) {
        const file = e.target.files?.[0];
        if (!file) {
            setImageData("");
            setImageName("");
            return;
        }

        setImageName(file.name);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImageData(typeof reader.result === "string" ? reader.result : "");
        };
        reader.readAsDataURL(file);
    }

    function removeImage() {
        setImageData("");
        setImageName("");
        if (imageInputRef.current) {
            imageInputRef.current.value = "";
        }
    }

    function createHandler(e) {
        e.preventDefault();

        // Always read the latest guides from localStorage first
        // to avoid stale state (outdated data) when adding multiple guides in a row.
        
        const savedGuides = localStorage.getItem("guides");
        const existingGuides = savedGuides ? JSON.parse(savedGuides) : [];
        const numericIds = existingGuides
            .map((guide) => Number(guide.id))
            .filter((id) => Number.isInteger(id) && id >= 0);
        const nextId = numericIds.length > 0 ? Math.max(...numericIds) + 1 : 1;
        const newGuide = {
            // NumericID
            id: nextId,
            commonName: commonName,
            scientificName: scientificName,
            light: light,
            watering: watering,
            soil: soil,
            level: level,
            image: imageData || ImgNotFound,
        };

        const updatedGuides = [...existingGuides, newGuide];

        try {
            // Saving can fail when localStorage quota is exceeded (often due to large images).
            localStorage.setItem("guides", JSON.stringify(updatedGuides));
            navigate('/myPlants');
        } catch {
            alert("Could not save guide. Try a smaller image or remove old guides.");
        }
    }

	return (
        <div className="add-form">
        <h2>Add a Guide</h2>
        <form  onSubmit={createHandler}>
            <label htmlFor="common-name">Common name:</label>
            <input id="common-name" type="text" placeholder="Common name" value={commonName} onChange={(e) => setCommonName(e.target.value)} required /><br/>
            <label htmlFor="scientific-name">Scientific name:</label>
            <input id="scientific-name" type="text" placeholder="Scientific name" value={scientificName} onChange={(e) => setScientificName(e.target.value)} required /><br/>
            <label htmlFor="light">Light:</label>
            <input id="light" type="text" placeholder="Light requirements" value={light} onChange={(e) => setLight(e.target.value)} required /> <br/>
            <label htmlFor="watering">Watering:</label>
            <input id="watering" type="text" placeholder="Watering requirements" value={watering} onChange={(e) => setWatering(e.target.value)} required /> <br/>
            <label htmlFor="soil">Soil:</label>
            <input id="soil" type="text" placeholder="Soil requirements" value={soil} onChange={(e) => setSoil(e.target.value)} required /> <br/>
            <label htmlFor="level">Level:</label>
            <select id="level" value={level} onChange={(e) => setLevel(e.target.value)} required>
                <option value="">Select level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
            </select> <br/>
            <label htmlFor="guide-image">Upload image:</label>
            <div className="image-input-row">
                <input id="guide-image" type="file" accept="image/*" onChange={handleImageChange} ref={imageInputRef} />
                {imageData && (
                    <button className="remove-image-btn" type="button" onClick={removeImage}>Remove image</button>
                )}
            </div>
            <button className="submit-btn" type="submit">Add</button>
        </form>
        </div>
    )
}
    

