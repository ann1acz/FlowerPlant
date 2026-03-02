import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./pageone.css";

export default function PageOne() {

    const [series, setSeries] = useState(() => {
        const savedSeries = localStorage.getItem("series");
        return savedSeries ? JSON.parse(savedSeries) : [];
    });

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [genre, setGenre] = useState("");
    const [chaptersReadCount, setChaptersReadCount] = useState("");
    const [chaptersTotalCount, setChaptersTotalCount] = useState("");
    const [status, setStatus] = useState("");
    const [rating, setRating] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("series", JSON.stringify(series));
    }, [series]);

    function createHandler(e) {
        e.preventDefault();
        const chaptersread = `${chaptersReadCount}/${chaptersTotalCount}`;
        const newSeries = { id: Date.now(), title, author, genre, chaptersread, status, rating };
        const updatedSeries = [...series, newSeries];
        setSeries(updatedSeries);
        localStorage.setItem("series", JSON.stringify(updatedSeries));
        navigate('/pagetwo'); 
    }

	return (
        <div className="add-form">
        <h2>Add New Series</h2>
        <form  onSubmit={createHandler}>
            <label htmlFor="title">Title:</label>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
            <label htmlFor="author">Author:</label>
            <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} /><br/>
            <label htmlFor="genre">Genre:</label>
            <select id="genre" value={genre} onChange={(e) => setGenre(e.target.value)}>
                <option value="">Select genre</option>
                <option value="Action">Action</option>
                <option value="Romance">Romance</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Drama">Drama</option>
                <option value="Comedy">Comedy</option>
                <option value="Slice of Life">Slice of Life</option>
                <option value="Horror">Horror</option>
                <option value="Sci-fi">Sci-fi</option>
                <option value="Thriller">Thriller</option>
            </select> <br/>
            <label htmlFor="chaptersread">Chapters Read:</label>
            <input
                id="chaptersread"
                type="number"
                min="0"
                placeholder="read chapters"
                value={chaptersReadCount}
                onChange={(e) => setChaptersReadCount(e.target.value)}
            />
            <span>/</span>
            <input
                type="number"
                min="0"
                placeholder="total chapters"
                value={chaptersTotalCount}
                onChange={(e) => setChaptersTotalCount(e.target.value)}
            /> <br/>
            <label htmlFor="status">Status:</label>
            <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="">Select status</option>
                <option value="Reading">Reading</option>
                <option value="Completed">Completed</option>
                <option value="On Hold">On Hold</option>
                <option value="Dropped">Dropped</option>
                <option value="Plan to Read">Plan to Read</option>
            </select> <br/>
            <label htmlFor="rating">Rating:</label>
            <select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value="">Select rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <span>/10</span>
            </select>
            <span>/10</span> <br/>
            <button type="submit">Add</button>
        </form>
        </div>
    )
}
    

