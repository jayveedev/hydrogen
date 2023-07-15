import { Link } from 'react-router-dom';

export default function Topbar(props) {

    return(
        <Link to={ props.info.url }
        className="common_header__topbar common_header_topbar__link common_header__topbar_mobile common_header__topbar_desktop">
    
        <div className="common_header__topbar_text">
          <p><strong>{ props.info.text }</strong></p>
    
        </div>
    
      </Link>
      
    );

}