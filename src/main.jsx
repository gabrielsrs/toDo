import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import RawPage from './raw-page.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/user" element={<RawPage />} />
      <Route path="/calendar" element={<RawPage />} />
      <Route path="/metrics" element={<RawPage />} />
      <Route path="/upload" element={<RawPage />} />
      <Route path="/location" element={<RawPage />} />
      <Route path="/settings" element={<RawPage />} />
    </Routes>
  </BrowserRouter>,
)
