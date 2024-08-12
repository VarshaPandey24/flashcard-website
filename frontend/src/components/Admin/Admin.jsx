import React, { useState } from 'react';
import './Admin.css';  // Import the CSS file

const Admin = ({ flashcards, addFlashcard, updateFlashcard, deleteFlashcard }) => {
    const [newFlashcard, setNewFlashcard] = useState({ question: '', answer: '' });
    const [editFlashcard, setEditFlashcard] = useState(null);

    const handleAddFlashcard = () => {
        addFlashcard(newFlashcard);
        setNewFlashcard({ question: '', answer: '' }); // Reset form
    };

    const handleUpdateFlashcard = (id) => {
        updateFlashcard(id, newFlashcard);
        setEditFlashcard(null); // Reset edit mode
        setNewFlashcard({ question: '', answer: '' }); // Reset form
    };

    const handleEdit = (card) => {
        setEditFlashcard(card.id);
        setNewFlashcard({ question: card.question, answer: card.answer });
    };

    return (
        <div className="admin-container">
            <h1>Admin Page</h1>
            <h2>{editFlashcard ? 'Edit Flashcard' : 'Add Flashcard'}</h2>
            <input
                type="text"
                placeholder="Question"
                value={newFlashcard.question}
                onChange={(e) => setNewFlashcard({ ...newFlashcard, question: e.target.value })}
            />
            <input
                type="text"
                placeholder="Answer"
                value={newFlashcard.answer}
                onChange={(e) => setNewFlashcard({ ...newFlashcard, answer: e.target.value })}
            />
            <button onClick={() => editFlashcard ? handleUpdateFlashcard(editFlashcard) : handleAddFlashcard()}>
                {editFlashcard ? 'Update Flashcard' : 'Add Flashcard'}
            </button>

            <h2>Existing Flashcards</h2>
            <ul>
                {flashcards.map((card) => (
                    <li key={card.id}>
                        <strong>{card.question}</strong>: {card.answer}
                        <div>
                            <button onClick={() => handleEdit(card)}>Edit</button>
                            <button onClick={() => deleteFlashcard(card.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
