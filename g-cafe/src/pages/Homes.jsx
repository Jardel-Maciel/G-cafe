import bgImg from '../assets/bg-mobile.jpg'
import img2 from '../assets/img2.png'
import Botao from '../components/Botao/Botao'

export default function Home() {
    return (
        <div>
            <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/src/assets/bg-mobile.jpg)' }} >

                <div className='flex justify-center items-center text-amber-50 bg-black opacity-75 h-full w-full'>
                    <h1 className='text-6xl text-center mt-10  font-extralight'>
                        O futuro do café, hoje.
                    </h1>

                </div>

                <div className='text-amber-50 absolute bottom-10 left-1/2 top-110 transform -translate-x-1/2'>
                    <Botao
                        label="Experimente agora"
                        onClick={() => alert('Clicou no botão!')}
                    />
                </div>
            </div>
            <section>
                <div className='flex flex-col space-y-4 items-center justify-center text-center mt-10 px-4'>
                    <img  src={img2} alt="imagem ilustrativa" />
                   
                    <h2 className='items-start text-3xl text-left pt-5'>Uma  cafeteria inteligente,
                        onde tradição e inovação
                        se encontram.</h2>

                    <Botao 
                        label="Experimente agora"
                        onClick={() => alert('Clicou no botão!')}
                    /> 

                </div>
            </section>

            <section></section>
        </div>
    )
}