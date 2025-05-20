import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import GamemodesPage from './pages/GamemodesPage'
import RanksPage from './pages/RanksPage'
import SocialPage from './pages/SocialPage'
import CreditsPage from './pages/CreditsPage'
import CratesPage from './pages/CratesPage'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="gamemodes" element={<GamemodesPage />} />
          <Route path="ranks" element={<RanksPage />} />
          <Route path="social" element={<SocialPage />} />
          <Route path="crates" element={<CratesPage />} />
          <Route path="credits" element={<CreditsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
