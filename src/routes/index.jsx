import { Route, Routes } from "react-router-dom"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<p>Home</p>} />

            <Route path="*" element={<Navigator to="/"/>} />
        </Routes>
    )
}