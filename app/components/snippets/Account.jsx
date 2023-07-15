import { Link } from 'react-router-dom';

export default function Account() {
    return(
        <Link className="js__recharge_login_link common_header__link common_header__link_account" 
            to="/">
                <svg className="common_header__link_icon" 
                width="19" 
                height="19" 
                viewBox="0 0 18 18" 
                xmlns="http://www.w3.org/2000/svg">
                    <path d="M9,3.54a3.1,3.1,0,1,0,3.1,3.1A3.1,3.1,0,0,0,9,3.54ZM9,8.26a1.62,1.62,0,1,1,1.62-1.62A1.62,1.62,0,0,1,9,8.26Z"></path>
                    <path d="M9,0A9,9,0,0,0,3.54,16.16v0.07h0.1a9,9,0,0,0,10.72,0h0.1V16.16A9,9,0,0,0,9,0Zm4,15.38a7.53,7.53,0,0,1-8,0V14.9a2.8,2.8,0,0,1,2.8-2.8h2.36A2.8,2.8,0,0,1,13,14.9v0.48Zm1.42-1.15a4.28,4.28,0,0,0-4.23-3.61H7.82a4.28,4.28,0,0,0-4.23,3.61A7.52,7.52,0,1,1,14.41,14.23Z"></path>

                </svg>

        </Link>
    );

}