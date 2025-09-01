import Botao from "../Botao/Botao"
export default function Home() {
    return (
        <>
            <header className="flex justify-around items-center pt-2.5">

                <h1>G cafe</h1>

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