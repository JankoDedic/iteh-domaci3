import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { App } from './App'
import { FrameworksPage } from './FrameworksPage'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/frameworks" element={<FrameworksPage />} />
      </Routes>
    </BrowserRouter>
  )
}
