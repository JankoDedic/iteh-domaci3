import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { App } from './App'
import { FirstPage } from './FirstPage'
import { SecondPage } from './SecondPage'

export function AppRouter() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/first_page" element={<FirstPage />} />
      <Route path="/second_page" element={<SecondPage />} />
    </Routes>
  </BrowserRouter>
}
