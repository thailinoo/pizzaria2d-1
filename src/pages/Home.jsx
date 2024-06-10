import { Link } from 'react-router-dom'
import logo from '../assets/react.svg'

const Home = () => {

    return (
        <Link to="/inicio">
            <img src={logo} alt="logo" width="100" />
            <p>Imagem do Logo</p>
        </Link>
    )
}

export default Home