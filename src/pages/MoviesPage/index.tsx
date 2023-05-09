import { Movie } from "../../types";
import { useState, useEffect } from 'react';
import { getMovies } from '../../api/api';
import { Card, Spinner } from "react-bootstrap";
import './index.css';

export default function MoviesPage() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies();
            setMovies(data);
            setLoading(false);
        };
        fetchMovies();
    }, []);

    return (
        <div className="movie-container">
            {loading && <Spinner animation="border" />}
            <ul>
                {movies.map(movie => (
                    <Card className="movie-card" style={{ width: '18rem' }} key={movie._id}>
                        <Card.Body>
                            <Card.Title>{movie.name}</Card.Title>
                        </Card.Body>
                    </Card>
                ))}
            </ul>
        </div>
    );
}
