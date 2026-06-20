import queenData from "./queenData.json"
import type { Album } from "../types/types"

const dataMap: Record<string, Album[]> = {
    queen: queenData as Album[],
}

export default dataMap