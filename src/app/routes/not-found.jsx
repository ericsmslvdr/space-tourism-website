import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1>404 - Not Found</h1>
            <br />
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" replace>
                <button>Go to Home</button>
            </Link>
        </div>
    )
}

export default NotFound