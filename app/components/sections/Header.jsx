import {
    useLoaderData,
} from '@remix-run/react';

import Topbar from '../snippets/Topbar';
import Menu from '../snippets/Menu';
import Logo from '../snippets/Logo';
import Account from '../snippets/Account';
import Cart from '../snippets/Cart';


export default function Header() {
    const data = useLoaderData();

    const { url } = data.layout.shop.primaryDomain;

    const topBarInfo = {
        url: '/',
        text: 'Shop Our Brand New CBD Isolate Oil'
    }

    return (
    <header>
        <Topbar info = { topBarInfo } />

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
                        <Logo url = { url } />

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
