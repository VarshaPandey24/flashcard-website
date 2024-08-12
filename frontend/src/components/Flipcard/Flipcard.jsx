import React, { useState } from 'react';
import './Flipcard.css';

function Flipcard({ flashcards }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
        setShowAnswer(false);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
        setShowAnswer(false);
    };

    const handleFlip = () => {
        setShowAnswer(!showAnswer);
    };

    if (flashcards.length === 0) {
        return <div className="text-center loading-text">Loading...</div>;
    }

    const currentFlashcard = flashcards[currentIndex];

    return (
        <div className="app-container">
            <div className={`flashcard ${showAnswer ? 'flip' : ''}`} onClick={handleFlip}>
                <div className="front">
                    <p>{currentFlashcard.question}</p>
                </div>
                <div className="back">
                    <p>{currentFlashcard.answer}</p>
                </div>
            </div>
            <div className="navigation">
                <button className="nav-button" onClick={handlePrevious}>Previous</button>
                <button className="nav-button" onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Flipcard;
