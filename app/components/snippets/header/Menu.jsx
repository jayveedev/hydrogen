import { Link } from 'react-router-dom';

import { MenuIcon } from './svg_assets'

export default function Menu() {
    const logoIconAttr = {
        class: 'common_header__link_icon',
        width: '18',
        height: '18'
    };

    return (
    <Link className="common_header__link common_header__link_menu"
    id="js__menu_drawer_trigger"
    to="/">
        <MenuIcon attr={ logoIconAttr } />
        
    </Link>
    );
}