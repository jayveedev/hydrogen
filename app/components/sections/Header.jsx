import {useState} from "react";

import { Link, NavLink } from 'react-router-dom';
import { Icons } from '../snippets/Icons';
import { Button } from '../snippets/Button';


export default function Header({layout}) {

    const { url } = layout.shop.primaryDomain;
    const {menu} = layout;

    const [ isMenuDrawerOpen, setIsMenuDrawerOpen ] = useState(false);
    const [ isCartDrawerOpen, setIsCartDrawerOpen ] = useState(false);

    const toggleDrawer = (e, drawerType) => {
        e.preventDefault();

        switch(drawerType) {
            case 'menu':
                isMenuDrawerOpen ? setIsMenuDrawerOpen(false) : setIsMenuDrawerOpen(true);
                break;
            case 'cart':
                isCartDrawerOpen ? setIsCartDrawerOpen(false) : setIsCartDrawerOpen(true);
                break;
        }

    };

    return (
        <header>
            <Topbar />

            <div style={{ height: '0px' }}></div>

            <div className="common_header mobile_topbar_enabled desktop_topbar_enabled desktop_menu_enabled">
                <div className="common_header__content">
                    <div className="container common_header__container">
                        <div className="row common_header__row">
                            <div className="common_header__left">
                                <MenuIcon toggleDrawer={toggleDrawer} />

                            </div>

                            <div className="common_header__center">
                                <Logo url={url} />

                            </div>

                            <div className="common_header__right">
                                <p className="common_header__info_desktop">Made in USA*</p>

                                <Account />

                                <CartIcon toggleDrawer={toggleDrawer} />

                            </div>

                        </div>

                    </div>

                </div>

                <Navbar menu={ menu } />

                <MenuDrawer isMenuDrawerOpen={isMenuDrawerOpen} toggleDrawer={toggleDrawer} menu={ menu } />

                <CartDrawer isCartDrawerOpen={isCartDrawerOpen} toggleDrawer={toggleDrawer} /> 

            </div>

        </header>

    );

}


function Navbar({menu}) {

    const { headerMenu } = menu;

    return(
        <nav className="common_header__desktop_menu">
            {(headerMenu?.items || []).map( (item ) => (
                <li  className="common_header__desktop_menu__item"
                key={item.id}>
                    <NavLink  
                        to={item.to}
                        target={item.target}
                        className={({isActive}) =>
                            isActive ? 'common_header__desktop_menu__link active' : 'common_header__desktop_menu__link'
                        }
                    >
                        {item.title}
                        
                    </NavLink>

                </li>

            ))}

        </nav>

    )

}

function MenuDrawer({isMenuDrawerOpen, toggleDrawer, menu}) {

    const { headerMenu, secondaryMenu } = menu;

    const closeIconAttr = {
        icon_type: 'close',
        icon_class: 'menu_drawer__close_icon',
        width: '18',
        height: '18'
    };

    const accountIconAttr = {
        icon_type: 'account',
        icon_class: 'menu_drawer__account_icon',
        width: '18',
        height: '18'
    };

    return(
        <>
            <div className={`dl__drawer_overlay menu_drawer__overlay ${isMenuDrawerOpen ? "active" : ""}`}
            onClick={(e) => toggleDrawer(e,'menu')}></div>

            <div className={`dl__drawer dl__drawer_left dl__drawer_with_overlay menu_drawer ${isMenuDrawerOpen ? "active" : ""}`}>
                <div className="dl__circle menu_drawer__circle"></div>

                <div className="dl__drawer_content menu_drawer__content">
                    <Link className="dl__btn_icon menu_drawer__close"
                    onClick={(e) => toggleDrawer(e,'menu')}
                    to='#'>
                        <Icons attr={closeIconAttr} />

                    </Link>

                    <ul className="menu_drawer__main">
                        {(headerMenu?.items || []).map( (item ) => (
                            <li className="menu_drawer__main_item"
                            key={item.id}>
                                <NavLink  
                                    to={item.to}
                                    target={item.target}
                                    className={({isActive}) =>
                                        isActive ? 'menu_drawer__main_link active' : 'menu_drawer__main_link'
                                    }
                                >
                                    {item.title}
                                    
                                </NavLink>

                            </li>

                        ))}

                    </ul>

                    <ul className="menu_drawer__secondary">
                        {(secondaryMenu?.items || []).map( (item ) => (
                            <li className="menu_drawer__secondary_item"
                            key={item.id}>
                                <NavLink  
                                    to={item.to}
                                    target={item.target}
                                    className='menu_drawer__secondary_link'
                                >
                                    {item.title}
                                    
                                </NavLink>

                            </li>

                        ))}

                    </ul>

                    <Link className="js__recharge_login_link menu_drawer__account"
                    to="https://wuffes.com/tools/recurring/login?redirect=customer_portal%2Fsubscriptions"
                    alt="My Account">

                        <Icons attr={accountIconAttr} />

                        My Account

                    </Link>

                </div>

            </div>

        </>
    );
}


function CartDrawer({isCartDrawerOpen, toggleDrawer}) {

    const closeIconAttr = {
        icon_type: 'close',
        icon_class: 'cart_drawer__close_icon',
        width: '18',
        height: '18'
    },
    emptyCartIconAttr = {
        icon_type: 'empty_cart',
        icon_class: 'cart_drawer__empty_icon',
        width: '50',
        height: '50'
    },
    totalCartIconAttr = {
        icon_type: 'total_cart',
        icon_class: 'cart_drawer__footer_total__icon',
        width: '10',
        height: '10'
    },
    bottomCartIconAttr = {
        icon_type: 'bottom_cart',
        icon_class: 'cart_drawer__footer_note__icon',
        width: '20',
        height: '20'
    };

    const buttonAttr = {
        text: 'Checkout Securely'
    };

    return(
        <div className={`dl__drawer dl__drawer_right cart_drawer ${isCartDrawerOpen ? "active" : ""}`}>
            <div className="dl__drawer_content cart_drawer__content">
                <h5 className="cart_drawer__header">
                    Shopping cart

                    <Link
                    className="dl__btn_icon cart_drawer__close"
                    onClick={(e) => toggleDrawer(e,'cart')}
                    to="#">
                        <Icons attr={closeIconAttr} />
                    
                    </Link>
                    
                </h5>

                <div className="cart_drawer__body cart_drawer_note">
                    <div className="cart_drawer__items">
                        <div className="cart_drawer__empty">
                            <div className="cart_drawer__empty_img">
                                <Icons attr={emptyCartIconAttr} />

                            </div>

                            <h4 className="cart_drawer__empty_txt">Your cart is empty</h4>

                        </div>

                    </div>

                </div>

                <div className="cart_drawer__footer cart_drawer_note">
                    <h4 className="cart_drawer__footer_total">
                        <span>
                            Subtotal

                            <Icons attr={totalCartIconAttr} />

                        </span>

                        <span></span>

                    </h4>

                    <Button attr={buttonAttr} />

                    <p className="cart_drawer__footer_note">
                        <Icons attr={bottomCartIconAttr} />

                        Buy more items — get bigger discounts and pay less!

                    </p>

                </div>

            </div>

        </div>
    );
}


function Logo({url}) {

    const logoIconAttr = {
        icon_type: 'logo',
        icon_class: 'dl__logo_main_img',
        width: '140',
        height: '50'
    };

    return(
        <Link className="dl__logo_main common_header__logo"
        to={ url }
        alt="">
            <Icons attr={ logoIconAttr }/>

        </Link>
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

function MenuIcon({toggleDrawer}) {

    const menuIconAttr = {
        icon_type: 'menu',
        icon_class: 'common_header__link_icon',
        width: '18',
        height: '18'
    };

    return(
        <Link className="common_header__link common_header__link_menu"
        onClick={(e) => toggleDrawer(e,'menu')}
        to="/">
            <Icons attr={ menuIconAttr } />
            
        </Link>
    );
}

function CartIcon({toggleDrawer}) {

    const cartIconAttr = {
        icon_type: 'cart',
        icon_class: 'common_header__link_icon',
        width: '18',
        height: '18'
    };

    return(
        <Link className="common_header__link common_header__link_cart" 
        onClick={(e) => toggleDrawer(e,'cart')}
        to="#">
            <Icons attr={ cartIconAttr } />

        </Link>

    );
}

function Account() {

    const accountIconAttr = {
        icon_type: 'account',
        icon_class: 'common_header__link_icon',
        width: '19',
        height: '19'
    };

    return(
        <Link className="js__recharge_login_link common_header__link common_header__link_account" 
        to="/">
            <Icons attr={ accountIconAttr }/>

        </Link>
    );

}
