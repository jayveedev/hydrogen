import { Header } from '~/components';

export function Layout({layout}) {

    return (
        <>
            <Header layout = {layout} />

            <main role="main" 
            id="mainContent">
                

            </main>
        </>
    );
}
