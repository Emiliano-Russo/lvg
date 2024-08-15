import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import { Store } from './src/Store/Store';
import { Downloads } from './src/Downloads/Downloads';
import { Library } from './src/Library/Library';
import Header from './src/Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/library" element={<Library />} />
      </Routes>
    </Router>
  );
}
