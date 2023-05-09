import { Character } from "../../types";
import { useState, useEffect } from 'react';
import { getCharacters } from "../../api/api";
import { Card, Spinner } from "react-bootstrap";
import './index.css';

export default function CharactersPage() {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getCharacters();
            setCharacters(data);
            setLoading(false);
        };
        fetchMovies();
    }, []);


    return (
        <div className="character-container">
            {loading && <Spinner animation="border" />}
            {characters.map(character => (
                <Card className="character-card" style={{ width: '18rem' }} key={character._id}>
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{character.race}</Card.Subtitle>
                        <Card.Text>{character.gender}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}