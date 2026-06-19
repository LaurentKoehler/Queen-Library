import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faTiktok, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'


function Footer() {

    return (
        <footer>
            <nav>
                <a href="https://www.facebook.com/Queen" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com/queenwillrock" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.instagram.com/officialqueenmusic" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://www.youtube.com/Queen" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="https://www.tiktok.com/@queenofficial" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTiktok} />
                </a>
                <a href="https://discord.com/invite/queenofficial" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faDiscord} />
                </a>
            </nav>
            <span>
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                    <img src={`${import.meta.env.BASE_URL}assets/header-condensed-logo.png`} alt="Queen" />
                </Link>
                <p>&copy; 2026</p>
            </span>        </footer>
    )
}

export default Footer