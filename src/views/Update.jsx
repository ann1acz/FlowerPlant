import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/form.css";

export default function UpdateGuide() {
    const { id } = useParams();
    const navigate = useNavigate();
    const imageInputRef = useRef(null);

    const [guides, setGuides] = useState(() => {
        const savedGuides = localStorage.getItem("guides");
        return savedGuides ? JSON.parse(savedGuides) : [];
    });

    const guide = guides.find((item) => item.id === id);

    const [commonName, setCommonName] = useState("");
    const [scientificName, setScientificName] = useState("");
    const [light, setLight] = useState("");
    const [watering, setWatering] = useState("");
    const [soil, setSoil] = useState("");
    const [level, setLevel] = useState("");
    const [imageData, setImageData] = useState("");
    const [imageName, setImageName] = useState("");

    useEffect(() => {
        if (!guide) {
            return;
        }

        setCommonName(guide.author || guide.title || "");
        setScientificName(guide.genre || "");
        setLight(guide.chaptersread || "");
        setWatering(guide.status || "");
        setSoil(guide.rating || "");
        setLevel(guide.level || "");
        setImageData(guide.image || "");
        setImageName(guide.image ? "Current image" : "");
    }, [guide]);

    function handleImageChange(event) {
        const file = event.target.files?.[0];
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

    function updateHandler(event) {
        event.preventDefault();

        if (!guide) {
            return;
        }

        const updatedGuide = {
            ...guide,
            title: commonName,
            author: commonName,
            genre: scientificName,
            chaptersread: light,
            status: watering,
            rating: soil,
            level,
            image: imageData,
        };

        const updatedGuides = guides.map((item) =>
            item.id === id ? updatedGuide : item
        );

        try {
            localStorage.setItem("guides", JSON.stringify(updatedGuides));
            setGuides(updatedGuides);
            navigate("/myPlants");
        } catch {
            alert("Could not update guide. Try a smaller image or remove old guides.");
        }
    }

    if (!guide) {
        return (
            <div className="add-form">
                <h2>Guide not found</h2>
                <button className="submit-btn" type="button" onClick={() => navigate("/myPlants")}>Back to My Plants</button>
            </div>
        );
    }

    return (
        <div className="add-form">
            <h2>Edit Guide</h2>
            <form onSubmit={updateHandler}>
                <label htmlFor="common-name">Common name:</label>
                <input id="common-name" type="text" placeholder="Common name" value={commonName} onChange={(event) => setCommonName(event.target.value)} required /><br/>

                <label htmlFor="scientific-name">Scientific name:</label>
                <input id="scientific-name" type="text" placeholder="Scientific name" value={scientificName} onChange={(event) => setScientificName(event.target.value)} required /><br/>

                <label htmlFor="light">Light:</label>
                <input id="light" type="text" placeholder="Light requirements" value={light} onChange={(event) => setLight(event.target.value)} required /> <br/>

                <label htmlFor="watering">Watering:</label>
                <input id="watering" type="text" placeholder="Watering requirements" value={watering} onChange={(event) => setWatering(event.target.value)} required /> <br/>

                <label htmlFor="soil">Soil:</label>
                <input id="soil" type="text" placeholder="Soil requirements" value={soil} onChange={(event) => setSoil(event.target.value)} required /> <br/>

                <label htmlFor="level">Level:</label>
                <select id="level" value={level} onChange={(event) => setLevel(event.target.value)} required>
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
                {imageName ? <p>{imageName}</p> : null}
                <button className="submit-btn" type="submit">Save Changes</button>
            </form>
        </div>
    );
}
