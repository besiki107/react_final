import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ThemeContext } from '../../context/ThemeContext'
import useLocalStorage from '../../hooks/useLocalStorage'
import { useTranslation } from 'react-i18next'

export default function Navbar(){
  const { theme, setTheme } = useContext(ThemeContext)
  const [lang, setLang] = useLocalStorage('lang', 'en')
  const { t, i18n } = useTranslation()
  const loc = useLocation()

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  const toggleLang = () => {
    const next = lang === 'en' ? 'ka' : 'en'
    setLang(next)
    i18n.changeLanguage(next)
  }

  return (
    <header className="nav">
      <div className="nav-inner container">
        <Link to="/" className="brand">MovieVerse</Link>
        <nav className="nav-links">
          <Link to="/" className={loc.pathname === '/' ? 'active' : ''}>{t('nav.home')}</Link>
          <Link to="/search" className={loc.pathname.startsWith('/search') ? 'active' : ''}>{t('nav.search')}</Link>
          <Link to="/watchlist" className={loc.pathname.startsWith('/watchlist') ? 'active' : ''}>{t('nav.watchlist')}</Link>
        </nav>
        <div className="nav-actions">
          <button onClick={toggleTheme} aria-label="Toggle theme">{theme === 'light' ? 'Dark' : 'Light'}</button>
          <button onClick={toggleLang} aria-label="Toggle language">{lang.toUpperCase()}</button>
        </div>
      </div>
    </header>
  )
}
