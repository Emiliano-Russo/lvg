// src/components/Store.tsx
import React, { useState } from 'react';
import games from './games.json';
import './Store.css'; // Para estilos personalizados si lo necesitas

interface Game {
  id: number;
  title: string;
  description: string;
  image: string;
  size: string;
}

export const Store: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const handleGameClick = (game: Game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  return (
    <div className="store-container">
      <div className="game-grid">
        {games.map((game) => (
          <div
            key={game.id}
            className="game-card"
            onClick={() => handleGameClick(game)}
          >
            <img src={game.image} alt={game.title} className="game-image" />
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="modal">
          <div className="modal-content">
            <h2>{selectedGame.title}</h2>
            <p>{selectedGame.description}</p>
            <p>
              <strong>Size:</strong> {selectedGame.size}
            </p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};
