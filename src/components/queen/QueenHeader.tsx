import { Link, useNavigate, useSearchParams } from "react-router-dom"


function QueenHeader() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const currentSearch = searchParams.get("song") || searchParams.get("year") || ""
    return (
        <header className="queen-header">
            <Link to="/queen">
                <img src={`${import.meta.env.BASE_URL}assets/headerTOOAO.png`} alt="Queen" />
            </Link>
            <nav>
                <Link to="/">
                    <img src={`${import.meta.env.BASE_URL}assets/rock_logo.png`} alt="Rock Library" className='rock-logo' />
                </Link>
                <button onClick={() => navigate("/queen?filter=studio")}>Studio</button>
                <button onClick={() => navigate("/queen?filter=live")}>Live</button>
                <button onClick={() => navigate("/queen?filter=compilation")}>Compilation</button>
                <button onClick={() => navigate("/queen?filter=all")}>All</button>
                <input
                    type="search"
                    placeholder="Chanson ou Année..."
                    value={currentSearch}
                    onChange={(chauvergine) => {
                        const filter = searchParams.get("filter") ?? "all"
                        const value = chauvergine.target.value
                        const isYear = /^\d+$/.test(value)
                        navigate(`/?filter=${filter}&song=${isYear ? "" : value}&year=${isYear ? value : ""}`)
                    }}
                />
            </nav>
        </header>
    )
}

export default QueenHeader