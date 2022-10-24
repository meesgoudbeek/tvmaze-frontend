import { createContext } from 'react'

interface AlertContextProps {
    alert: { message: string; type: string }
    setAlert(message: string, type: string): void
}

const alertsContext = createContext({} as AlertContextProps)

export default alertsContext
