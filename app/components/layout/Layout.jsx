import Header from '../sections/Header';

export default function Layout({layout}) {

    return (
        <main role="main" 
        id="mainContent">
            <Header url = {layout.shop.primaryDomain.url} />

        </main>
    );
}
