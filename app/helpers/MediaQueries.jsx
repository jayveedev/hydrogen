export default function viewport(viewport, constraint) {

    switch ( viewport ) {
        case '$viewport1':
            return constraint == 'min' ? 'screen and (min-width: 375px)' : 'screen and (max-width: 374px)';
            break;
        case '$viewport2':
            return constraint == 'min' ? 'screen and (min-width: 480px)' : 'screen and (max-width: 479px)';
            break;
        case '$viewport3':
            return constraint == 'min' ? 'screen and (min-width: 576px)' : 'screen and (max-width: 575px)';
            break;
        case '$viewport4':
            return constraint == 'min' ? 'screen and (min-width: 768px)' : 'screen and (max-width: 767px)';
            break;
        case '$viewport5':
            return constraint == 'min' ? 'screen and (min-width: 992px)' : 'screen and (max-width: 991px)';
            break;
        case '$viewport6':
            return constraint == 'min' ? 'screen and (min-width: 1200px)' : 'screen and (max-width: 1119px)';
            break;
        case '$viewport7':
            return constraint == 'min' ? 'screen and (min-width: 1920px)' : 'screen and (max-width: 1919px)';
            break;
    }

}
