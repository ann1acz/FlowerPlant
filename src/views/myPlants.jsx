import { useState } from "react";
import "../css/myplants.css";

export default function MyPlants() {
	const [series, setSeries] = useState(() => {
		const savedSeries = localStorage.getItem("series");
		return savedSeries ? JSON.parse(savedSeries) : [];
	});

	function handleDelete(id) {
		const updatedSeries = series.filter((item) => item.id !== id);
		setSeries(updatedSeries);
		localStorage.setItem("series", JSON.stringify(updatedSeries));
	}

	return (
		<section>
			<h1>My Plants</h1>
			{series.length === 0 ? (
				<p>No plants added yet.</p>
			) : (
				<div className="series-item">
					{series.map((item) => (
						<article key={item.id}>
							<h2>{item.title}</h2>
							<p><span className="field-label">Common name:</span> {item.author}</p>
							<p><span className="field-label">Scientific name:</span> {item.genre}</p>
							<p><span className="field-label">Light:</span> {item.chaptersread}</p>
							<p><span className="field-label">Watering:</span> {item.status}</p>
							<p><span className="field-label">Soil:</span> {item.rating}</p>
							<p><span className="field-label">Level:</span> {item.level}</p>
							<button type="button" onClick={() => handleDelete(item.id)}>
								Delete
							</button>
						</article>
					))}
				</div>
			)}
		</section>
	);
}
