import { useParams } from "react-router-dom"
import queenData from "../data/queenData.json"
import type { Album as AlbumData } from "../types/types"

const albums = queenData as AlbumData[]

function AlbumDetails() {
    const { id } = useParams();
    const album = albums.find((zizi) => zizi.id === Number(id))

    if (!album) {
        return <h1> Cet album n'existe pas</h1>
    }

    return (
        <section className="album-details">
            <h2>{album.title}</h2>

            <article className="cover-and-track">
                <img src={`${import.meta.env.BASE_URL}${album.cover.replace(/^\//, '')}`} alt={album.title} />                <div className="tracklist">
                    <ol>
                        {album.tracklist.map((track) => (
                            <li key={track.title}>
                                <strong>{track.title}</strong> — {track.writer} ({track.duration})
                            </li>
                        ))}
                    </ol></div>
            </article>
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
        </section>
    )
}

export default AlbumDetails