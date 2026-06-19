import { useSearchParams } from "react-router-dom"
import Album from "../components/Album"
import queenData from '../data/queenData.json'
import type { Album as AlbumData } from "../types/types"

const albums = queenData as AlbumData[]


function Home() {
    const [searchParams] = useSearchParams()
    const activeFilter = searchParams.get("filter") ?? "all"
    const songQuery = searchParams.get("song") ?? ""
    const yearQuery = searchParams.get("year") ?? ""

    const filteredAlbum = [...albums]
        .filter((album) => activeFilter === "all" || album.albumType === activeFilter)
        .filter((album) => {
            if (songQuery === "") return true
            return album.tracklist.some((track) =>
                track.title.toLowerCase().includes(songQuery.toLowerCase())
            )
        })
        .filter((album) => {
            if (yearQuery === "") return true
            return album.year.toString().startsWith(yearQuery)
        })
        .sort((a, b) => yearQuery ? a.year - b.year : a.id - b.id)

    return (
        <><h1>Albums</h1>
            <section className="album-grid">
                {filteredAlbum.map((album) => (
                    <Album key={album.id} album={album} />
                ))
                }
            </section>
        </>
    )
}

export default Home