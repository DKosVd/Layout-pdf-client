import Button from "../components/Button/Button";
import Main from "../layout/Main";

const BUTTONS = [{text: 'Создать отчет', url: '/report'}, {text: 'Перейти к отчетам', url: '/reports'}];

const Buttons = () => {
    return BUTTONS.map(({text, url}) => <Button text={text} url={url}/>)
}


const Home = () => {
    return (
        <Main>
            <Buttons/>
        </Main>
    );
}

export default Home;