import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const Main = ({children}) => {
    return (
        <div className="container mx-auto px-4">
            <Header/>
            <main className="main">
                {children}
            </main>
            <Footer/>
        </div>
        );
}

export default Main;