import { Link, useSearchParams } from "react-router-dom"
import dataMap from "../data/index"
import type { Album } from "../types/types"

const allAlbums: Album[] = Object.values(dataMap).flat()

function HomeGeneral() {
    const [searchParams] = useSearchParams()
    const decadeQuery = searchParams.get("decade") ?? ""
    const searchQuery = searchParams.get("search") ?? ""

    const filteredAlbums = [...allAlbums]
        .filter((album) => {
            if (searchQuery === "") return true
            const q = searchQuery.toLowerCase()
            return (
                album.year.toString().includes(q) ||
                album.artist.toLowerCase().includes(q) ||
                album.title.toLowerCase().includes(q) ||
                album.genre.some(g => g.toLowerCase().includes(q)) ||
                album.members.some(m => m.name.toLowerCase().includes(q)) ||
                album.guests.some(g => g.name.toLowerCase().includes(q)) ||
                album.tracklist.some(t => t.title.toLowerCase().includes(q))
            )
        })
        .filter((album) => {
            if (decadeQuery === "") return true
            return album.year.toString().startsWith(decadeQuery)
        })
        .sort(() => searchQuery === "" && decadeQuery === "" ? Math.random() - 0.5 : 0)
        .slice(0, searchQuery === "" && decadeQuery === "" ? 20 : Infinity)

    return (
        <div>
            <h1>Rock Library</h1>
            <section className="album-grid">
                {filteredAlbums.map((album) => (
                    <Link key={album.id} to={`/${album.artist.toLowerCase().replace(/ /g, '-')}/album/${album.id}`}>
                        <article className="album">
                            <img src={`${import.meta.env.BASE_URL}${album.cover.replace(/^\//, '')}`} alt={album.title} />
                            <h2>{album.title}</h2>
                        </article>
                    </Link>
                ))}
            </section>
        </div>
    )
}

export default HomeGeneral