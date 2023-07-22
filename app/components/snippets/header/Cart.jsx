import { Link } from 'react-router-dom';

import { CartIcon } from './svg_assets'

export default function Cart() {
    const logoIconAttr = {
        class: 'common_header__link_icon',
        width: '18',
        height: '18'
    };

    return(
        <Link className="common_header__link common_header__link_cart" 
        id="js__cart_drawer_trigger" 
        to="#">
            <CartIcon attr={ logoIconAttr } />

        </Link>

    );
}

