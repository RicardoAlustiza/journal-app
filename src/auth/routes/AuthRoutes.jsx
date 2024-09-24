import { Routes, Route, Navigate } from 'react-router-dom'
import { LogInPage, RegisterPage } from '../pages'

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<LogInPage />} />
        <Route path="register" element={<RegisterPage />} />
        
        <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}
