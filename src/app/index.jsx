import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

const AppRouter = () => {
    return <RouterProvider router={router} />
}

const App = () => {
    return (
        <AppRouter />
    )
}

export default App