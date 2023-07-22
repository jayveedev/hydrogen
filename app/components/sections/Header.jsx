import { Link } from 'react-router-dom';
import { Icons } from '../snippets/Icons';


export default function Header({url}) {

    const logoIconAttr = {
        icon_type: 'logo',
        icon_class: 'dl__logo_main_img',
        width: '140',
        height: '50'
    };

    return (
        <header>
            <Topbar />

            <div id="js__sticky_header_pseudo" style={{ height: '0px' }}></div>

            <div className="common_header mobile_topbar_enabled desktop_topbar_enabled desktop_menu_enabled"
            id="js__sticky_header">
            <div className="common_header__content">
                <div className="container common_header__container">
                    <div className="row common_header__row">
                        <div className="common_header__left">
                            <Menu />

                        </div>

                        <div className="common_header__center">
                            <Link className="dl__logo_main common_header__logo"
                            to={ url }
                            alt="">
                                <Icons attr={ logoIconAttr }/>

                            </Link>

                        </div>

                        <div className="common_header__right">
                            <p className="common_header__info_desktop">Made in USA*</p>

                            <Account />

                            <Cart />

                        </div>

                    </div>

                </div>

            </div>

            </div>

        </header>

    );

}


function Topbar() {

    return(
        <Link to='/'
        className="common_header__topbar common_header_topbar__link common_header__topbar_mobile common_header__topbar_desktop">
    
        <div className="common_header__topbar_text">
          <p><strong>Shop Our Brand New CBD Isolate Oil</strong></p>
    
        </div>
    
      </Link>
    );
}

function Menu() {

    const logoIconAttr = {
        icon_type: 'menu',
        icon_class: 'common_header__link_icon',
        width: '18',
        height: '18'
    };

    return(
        <Link className="common_header__link common_header__link_menu"
        id="js__menu_drawer_trigger"
        to="/">
            <Icons attr={ logoIconAttr } />
            
        </Link>
    );
}

function Cart() {

    const logoIconAttr = {
        icon_type: 'cart',
        icon_class: 'common_header__link_icon',
        width: '18',
        height: '18'
    };

    return(
        <Link className="common_header__link common_header__link_cart" 
        id="js__cart_drawer_trigger" 
        to="#">
            <Icons attr={ logoIconAttr } />

        </Link>

    );
}

function Account() {

    const logoIconAttr = {
        icon_type: 'account',
        icon_class: 'common_header__link_icon',
        width: '19',
        height: '19'
    };

    return(
        <Link className="js__recharge_login_link common_header__link common_header__link_account" 
        to="/">
            <Icons attr={ logoIconAttr }/>

        </Link>
    );

}