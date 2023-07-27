import Header from '../sections/Header';

export default function Layout({layout}) {

    return (
        <>
            <Header layout = {layout} />

            <main role="main" 
            id="mainContent">
                

            </main>
        </>
    );
}
