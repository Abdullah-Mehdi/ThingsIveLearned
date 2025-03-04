import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import Books from './components/Books';
import Games from './components/Games';
import Shows from './components/Shows';
import Anime from './components/Anime';
import Manga from './components/Manga';
import Poetry from './components/Poetry';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch(activeTab) {
      case 'home':
        return <LandingPage />;
      case 'books':
        return <Books />;
      case 'games':
        return <Games />;
      case 'movies':
        return <Shows />;
      case 'anime':
        return <Anime />;
      case 'manga':
        return <Manga />;
      case 'poetry':
        return <Poetry />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-brand">Things I've Learned</div>
        <ul className="nav-links">
          <li className={activeTab === 'home' ? 'active' : ''} onClick={() => setActiveTab('home')}>Home</li>
          <li className={activeTab === 'books' ? 'active' : ''} onClick={() => setActiveTab('books')}>Books</li>
          <li className={activeTab === 'games' ? 'active' : ''} onClick={() => setActiveTab('games')}>Games</li>
          <li className={activeTab === 'movies' ? 'active' : ''} onClick={() => setActiveTab('movies')}>Movies</li>
          <li className={activeTab === 'anime' ? 'active' : ''} onClick={() => setActiveTab('anime')}>Anime</li>
          <li className={activeTab === 'manga' ? 'active' : ''} onClick={() => setActiveTab('manga')}>Manga</li>
          <li className={activeTab === 'poetry' ? 'active' : ''} onClick={() => setActiveTab('poetry')}>Poetry & Quotes</li>
        </ul>
      </nav>
      <main className="content">
        {renderContent()}
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Abdullah-Mehdi | ThingsIveLearned</p>
      </footer>
    </div>
  );
}

export default App;