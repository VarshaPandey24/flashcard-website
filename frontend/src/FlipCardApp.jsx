import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Flipcard from './components/Flipcard/Flipcard';
import Admin from './components/Admin/Admin';
import Login from './components/Login/Login';
import './App.css'; // Optional: import your general styles

const FlipCardApp = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

    useEffect(() => {
        const fetchFlashcards = async () => {
            const response = await axios.get('https://flashcard-website-mu.vercel.app/');
            setFlashcards(response.data);
        };
        fetchFlashcards();
    }, []);

    const addFlashcard = async (newFlashcard) => {
        const response = await axios.post('https://flashcard-website-mu.vercel.app/', newFlashcard);
        setFlashcards([...flashcards, response.data]);
    };

    const updateFlashcard = async (id, updatedFlashcard) => {
        const response = await axios.put(`https://flashcard-website-mu.vercel.app/${id}`, updatedFlashcard);
        setFlashcards(flashcards.map(card => (card.id === id ? response.data : card)));
    };

    const deleteFlashcard = async (id) => {
        await axios.delete(`https://flashcard-website-mu.vercel.app/${id}`);
        setFlashcards(flashcards.filter(card => card.id !== id));
    };

    const handleLogin = () => {
        setIsLoggedIn(true); // Set login status to true
    };

    return (
        <div className="flashcard-app">
            
            {isLoggedIn ? (
                <>
                    <Admin
                        flashcards={flashcards}
                        addFlashcard={addFlashcard}
                        updateFlashcard={updateFlashcard}
                        deleteFlashcard={deleteFlashcard}
                    />
                    <Flipcard flashcards={flashcards} />
                </>
            ) : (
                <Login onLogin={handleLogin} /> // Show login component if not logged in
            )}
        </div>
    );
};

export default FlipCardApp;
