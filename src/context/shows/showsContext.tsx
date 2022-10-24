import { createContext } from 'react'

interface ShowsContextProps {
    getSingleShow(id: number | string): void
    // eslint-disable-next-line
    singleShow: any
    shows: Array<string> | object[]
    loading: boolean
    searchShows(searchTerm: string): void
    clearSingleShow(): void
}

const showsContext = createContext({} as ShowsContextProps)

export default showsContext
