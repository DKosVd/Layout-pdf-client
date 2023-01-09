import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const Main = ({children}) => {
    return (
        <div className="container container--column">
            <Header/>
            <main className="main">
                {children}
            </main>
            <Footer/>
        </div>
        );
}

export default Main;