import './header.scss';
import '../container/container';
import Button from '../generic/buttons/buttons';
import logo from '../../static/img/icons/logo.svg';



const Header = () => {
    return(
        <header>
                <div className="container">
                    <div className="profile_wrapper">
                        <div className="profile_photo"/>
                        <span className ='name'>Никита Негодяев</span>
                    </div>
                    <img src={logo} alt="logo.svg" className="logo" />
                    <Button span='Панель управления'/>
                </div>
        </header>
    );
};

export default Header;