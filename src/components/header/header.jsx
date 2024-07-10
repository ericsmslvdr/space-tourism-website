import logo from '../../assets/shared/logo.svg';

const Navbar = () => {
    return (
        <header>
            <div>
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul>
                    <li>HOME</li>
                    <li>DESTINATION</li>
                    <li>CREW</li>
                    <li>TECHNOLOGY</li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar