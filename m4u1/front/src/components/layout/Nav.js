import {Link} from "react-router-dom" 

function Nav(props) {
  return (
    <nav>
        <div>
            <ul>
                <li><Link to="/"></Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/novedades">Novedades</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>

            </ul>

        </div>
    </nav>
  )
}

export default Nav;