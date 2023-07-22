import { Link } from 'react-router-dom';

import { AccountIcon } from '../svg_assets'

export default function Account() {
    const logoIconAttr = {
        class: 'common_header__link_icon',
        width: '19',
        height: '19'
    };

    return(
        <Link className="js__recharge_login_link common_header__link common_header__link_account" 
        to="/">
            <AccountIcon attr={ logoIconAttr }/>

        </Link>
    );

}