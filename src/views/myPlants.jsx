import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/myplants.css";
import myPlantsHeaderImage from "../assets/images/irma-bopp-nliSEaXhNeI-unsplash.jpg";

export default function MyPlants() {
	const navigate = useNavigate();
	const [guides, setGuides] = useState(() => {
		const savedGuides = localStorage.getItem("guides");
		return savedGuides ? JSON.parse(savedGuides) : [];
	});
	const [searchText, setSearchText] = useState("");

	const filteredGuides = guides.filter((guide) => {
		const query = searchText.trim().toLowerCase();
		if (!query) {
			return true;
		}

		return [guide.title, guide.author, guide.genre]
			.filter(Boolean)
			.some((value) => value.toLowerCase().includes(query));
	});

	function handleDelete(id) {
		const updatedGuides = guides.filter((item) => item.id !== id);
		setGuides(updatedGuides);
		localStorage.setItem("guides", JSON.stringify(updatedGuides));
	}

	return (
		<>
			<div className="page-hero">
				<img className="hero-image" src={myPlantsHeaderImage} alt="Plants in sunlight" />
				<div className="website-intro">
					<h1>My Plants</h1>
					<p>Manage your plant collection and care guides here.<br/>Use the search bar to quickly find specific plants in your collection.</p>
				</div>
				<div className="overlay"></div>
				</div>
			<section>
				<div className="my-plants-search">
					<input
						type="text"
						placeholder="Search by common/scientific name"
						value={searchText}
						onChange={(event) => setSearchText(event.target.value)}
					/>
				</div>
				{guides.length === 0 ? (
					<>
						<p className="no-guides">No guides added yet.</p>
						<button className="add-guide-button" type="button" onClick={() => navigate('/form')}>Add a Guide</button>
					</>
				) : (
					<>
						{filteredGuides.length === 0 ? (
							<p className="no-guides">No plants match your search.</p>
						) : (
						<div className="my-guides-list">
						{filteredGuides.map((item) => (
							<article className="my-guide-card" key={item.id}>
								{item.image ? <img className="my-guide-image" src={item.image} alt={item.author || item.title} /> : null}
								<h2>{item.title}</h2>
								<p><span className="field-label">Common name:</span> {item.author}</p>
								<p><span className="field-label">Scientific name:</span> {item.genre}</p>
								<p><span className="field-label">Light:</span> {item.chaptersread}</p>
								<p><span className="field-label">Watering:</span> {item.status}</p>
								<p><span className="field-label">Soil:</span> {item.rating}</p>
								<p><span className="field-label">Level:</span> {item.level}</p>
								<button className="delete-guide-button" type="button" onClick={() => handleDelete(item.id)}>
									Delete
								</button>
							</article>
						))}
						</div>
						)}
						<button className="add-guide-button" type="button" onClick={() => navigate('/form')}>Add a Guide</button>
					</>
				)}
			</section>
		</>
	);
}
