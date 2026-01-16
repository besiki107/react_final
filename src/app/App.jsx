import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './router'
import { ThemeProvider } from '../context/ThemeContext'

export default function App(){
  return (
    <ThemeProvider>
      <BrowserRouter basename="/react_final">
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
