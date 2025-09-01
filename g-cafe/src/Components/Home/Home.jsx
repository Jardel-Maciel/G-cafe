import Botao from "../Botao/Botao"
import logo from '../../assets/Logo.png'
export default function Home() {
    return (
        <>
            <header className="flex justify-around items-center pt-2.5">
                <div className="w-30">
                    <img src={logo} alt="" />
                </div>

                <nav className="flex justify-around items-center gap-4">
                    <ul className="gap-7 flex">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Cardapio</a></li>
                        <li><a href="#">Experiencia</a></li>
                        <li><a href="#">Sobre</a></li>
                    </ul>
                    <Botao

                        label={"Experimente"}
                        link={"https://www.google.com"}


                    />
                </nav>
            </header>

           

        </>
    )
}