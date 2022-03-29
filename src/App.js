import Welcome from "./components/Welcome";
import { Routes, Route } from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import RequireAuth from "./components/RequireAuth";
import ProtectedPage from "./pages/ProtectedPage";
import PublicPage from "./pages/PublicPage";
import LoginPage from "./pages/LoginPage";

export default function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route >
            <Route path="/" element={<Welcome />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/protected"
              element={
                <RequireAuth>
                  <ProtectedPage />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}
