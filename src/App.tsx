// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StoryPage from './pages/books/StoryPage';
import ChapterPage from './pages/books/ChapterPage'; // ✅ Add this

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/:slug" element={<StoryPage />} />
      <Route path="/books/:slug/chapter/:chapterNumber" element={<ChapterPage />} /> {/* ✅ New route */}
    </Routes>
  );
}

export default App;