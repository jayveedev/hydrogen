import { Link } from 'react-router-dom';

import { LogoIcon } from './svg_assets'

export default function Logo(props) {

    const logoIconAttr = {
        class: 'dl__logo_main_img',
        width: '140',
        height: '50'
    };

    return (
    <Link className="dl__logo_main common_header__logo"
    to={props.url}
    alt="">
        <LogoIcon attr={ logoIconAttr } />

    </Link>
    );
}