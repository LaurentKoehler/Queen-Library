import { Link } from "react-router-dom"
import type { AlbumProps } from "../types/types"


function Album({ album }: AlbumProps) {

    return (
        <Link to={`/queen/album/${album.id}`}>
            <article className="album">
                <img src={`${import.meta.env.BASE_URL}${album.cover.replace(/^\//, '')}`} alt={album.title} />
                <div >
                    <h2>{album.title}</h2>
                </div>
            </article>
        </Link >
    )
}

export default Album