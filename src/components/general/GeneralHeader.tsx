import { Link, useNavigate, useSearchParams, } from "react-router-dom";

function GeneralHeader() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()


    return (
        <header className="general-header">
            <Link to="/">
                <img src={`${import.meta.env.BASE_URL}assets/rock_logo.png`} alt="Rock Library" />
            </Link>
            <nav>
                <select className="nav-select" onChange={(grosseAubergine) => navigate(grosseAubergine.target.value)}>
                    <option value="">Groupes</option>
                    <option value="/queen">Queen</option>
                    <option value="/pink-floyd">Pink Floyd</option>
                </select>
                <select className="nav-select" onChange={(biscuit) => {
                    const decade = biscuit.target.value
                    navigate(`/?decade=${decade}`)
                }}>
                    <option value="">Décennies</option>
                    <option value="196">60s</option>
                    <option value="197">70s</option>
                    <option value="198">80s</option>
                    <option value="199">90s</option>
                    <option value="200">2000s</option>
                    <option value="201">2010s</option>
                    <option value="202">2020s</option>

                </select>
                <input
                    type="search"
                    placeholder="Rechercher..."
                    value={searchParams.get("search") ?? ""}
                    onChange={(e) => {
                        const decade = searchParams.get("decade") ?? ""
                        const value = e.target.value
                        navigate(`/?decade=${decade}&search=${value}`)
                    }}
                />
            </nav>
        </header>
    )
}

export default GeneralHeader