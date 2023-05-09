import { Quote } from "../../types";
import { useState, useEffect } from 'react';
import { getQuotes } from "../../api/api";
import { Card, Spinner } from "react-bootstrap";
import './index.css';

export default function QuotesPage() {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchQuotes = async () => {
            const data = await getQuotes();
            setQuotes(data);
            setLoading(false);
        };
        fetchQuotes();
    }, []);

    return (
        <div className="quote-container">
            {loading && <Spinner animation="border" />}
            {quotes.map(quote => (
                <Card className="quote-card" style={{ width: '18rem' }} key={quote._id}>
                    <Card.Body>
                        <Card.Text>{quote.dialog}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
