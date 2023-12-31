import { Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Users from "./pages/Users"

function Router() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Users />} />
        </Routes>
    )
}

export default Router