import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate()
    return (
        <header>
            <img src="assets/headerTOOAO.png" alt="Queen" />
            <nav>
                <button onClick={() => navigate("/?filter=studio")}>Studio</button>
                <button onClick={() => navigate("/?filter=live")}>Live</button>
                <button onClick={() => navigate("/?filter=compilation")}>Compilation</button>
                <button onClick={() => navigate("/?filter=all")}>All</button>
            </nav>
        </header>
    )
}

export default Header