import { useParams, useNavigate } from "react-router-dom"
import queenData from "../data/queenData.json"
import type { Album as AlbumData } from "../types/types"

const albums = queenData as AlbumData[]

function AlbumDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const album = albums.find((zizi) => zizi.id === Number(id));
    const currentIndex = albums.findIndex((aubergine) => aubergine.id === Number(id));
    const previousAlbum = albums[currentIndex - 1] ?? albums[albums.length - 1]
    const nextAlbum = albums[currentIndex + 1] ?? albums[0]

    if (!album) {
        return <h1> Cet album n'existe pas</h1>
    }

    return (
        <section className="album-details">
            <h1>{album.title}</h1>

            <article className="cover-and-track">
                <img src={`${import.meta.env.BASE_URL}${album.cover.replace(/^\//, '')}`} alt={album.title} />
                <div className="tracklist">
                    <ol>
                        {album.tracklist.map((track) => (
                            <li key={track.title}>
                                <strong>{track.title}</strong> — {track.writer} ({track.duration})
                            </li>
                        ))}
                    </ol></div>
            </article>

            <div className="nav-buttons">
                <button onClick={() => navigate(`/album/${previousAlbum.id}`)}>
                    ← {previousAlbum.title}
                </button>
                <button onClick={() => navigate(`/album/${nextAlbum.id}`)}>
                    {nextAlbum.title} →
                </button>
            </div>
            <div className="bottom-row">
                <article className="description">
                    <p>{album.description}</p>
                    <p>
                        <strong>Date de sortie:</strong> {album.releaseDate}
                        {album.concertDate && (
                            <span style={{ display: "block" }}>
                                <strong>Date de concert:</strong> {album.concertDate}
                            </span>
                        )}
                    </p>
                    <h3>Membres:</h3>
                    <ul>
                        {album.members.map((member) => (
                            <li key={member.name}>
                                <strong>{member.name}</strong> — {member.instruments.join(", ")}
                            </li>
                        ))}
                    </ul>

                    {album.guests.length > 0 && (
                        <>
                            <h3>Artistes invités</h3>
                            <ul>
                                {album.guests.map((guest) => (
                                    <li key={guest.name}>
                                        <strong>{guest.name}</strong> — {guest.role}
                                    </li>
                                ))}
                            </ul>
                        </>
                    )}
                    <p><strong>Label UK:</strong> {album.label} / <strong>Label US:</strong> {album.labelUS}</p>
                    <p><strong>Production: </strong> {album.producer}</p>
                    <p><strong>Genre:</strong> {album.genre.join(", ")}</p>

                    {album.studios.length > 0 && (
                        <p><strong>Studios:</strong> {album.studios.join(", ")}</p>
                    )}

                    {album.notableSingles.length > 0 && (
                        <p><strong>Singles notables</strong> : {album.notableSingles.join(", ")}</p>
                    )}
                </article>
                {album.spotifyId && (
                    <iframe
                        src={`https://open.spotify.com/embed/album/${album.spotifyId}`}
                        width="100%"
                        height="352"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                )}
            </div>
        </section >
    )
}

export default AlbumDetails