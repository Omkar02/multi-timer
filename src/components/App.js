import Header from './Header'
import Main from "./Main";
import Footer from './Footer';

export default function App() {
    return (
        <div className="bg-light d-flex flex-wrap justify-content-center vh-100">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}
