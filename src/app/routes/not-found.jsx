import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="bg-gray-800 h-screen grid place-content-center">
            <h1 className="text-4xl text-center">404 - Not Found</h1>
            <p className="text-2xl text-center mt-4">Sorry, the page you are looking for does not exist.</p>
            <Link to="/" replace className="text-center">
                <button className="mt-10 bg-gray-900 p-4 rounded-lg hover:bg-gray-950">Go to Home</button>
            </Link>
        </div>
    )
}

export default NotFound