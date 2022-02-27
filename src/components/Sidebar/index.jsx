import { Container } from "./styles";
import imgLogo from '../../assets/sidebar/logo.png';
import instaLogo from '../../assets/sidebar/insta-logo.png';



export function Sidebar(props) {

    return(
        <Container type={props.type}>
            <div><img src={imgLogo} className="img-logo" /></div>
            <nav>
                <ul>
                <li onClick={() => props.setType('cookies')}><p >Cookies</p></li>
                <li onClick={() => props.setType('barras')}><p>Barras</p></li>
                <li onClick={() => props.setType('tortas')}><p>Tortas</p></li>
                <li onClick={() => props.setType('potes')}><p>Potes</p></li>
                </ul>
            </nav>

            <a href="https://www.instagram.com/cookiesdodavi/" target="_blank" > <img src={instaLogo} alt="Instagram" className="insta-logo" /></a>
        </Container>
    )
}