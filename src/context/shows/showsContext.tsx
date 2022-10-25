import { createContext } from 'react'

interface ShowsContextProps {
    getSingleShow(id: number | string): void
    singleShow
    shows: Array<string> | Array<object> | Array<number>
    loading: boolean
    searchShows(searchTerm: string): void
    clearSingleShow(): void
}

const showsContext = createContext({} as ShowsContextProps)

export default showsContext
