import { Link, useSearchParams } from "react-router-dom"
import dataMap from "../data/index"
import type { Album } from "../types/types"

const allAlbums: Album[] = Object.values(dataMap).flat()

function HomeGeneral() {
    const [searchParams] = useSearchParams()
    const decadeQuery = searchParams.get("decade") ?? ""

    const filteredAlbums = [...allAlbums]
        .sort(() => Math.random() - 0.5)
        .filter((album) => {
            if (decadeQuery === "") return true
            return album.year.toString().startsWith(decadeQuery)
        })
        .slice(0, 20)

    return (
        <div>
            <h1>Rock Library</h1>
            <section className="album-grid">
                {filteredAlbums.map((album) => (
                    <Link key={album.id} to={`/${album.artist.toLowerCase()}/album/${album.id}`}>
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