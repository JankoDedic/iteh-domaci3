import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { App } from './App'
import { FrameworksPage } from './FrameworksPage'
import { SecondPage } from './SecondPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/frameworks" element={<FrameworksPage />} />
        <Route path="/second_page" element={<SecondPage />} />
      </Routes>
    </BrowserRouter>
  )
}
