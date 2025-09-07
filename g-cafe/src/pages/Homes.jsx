import bgImg from '../assets/bg-mobile.jpg'
import img2 from '../assets/img2.png'
import expresso from '../assets/expresso.jpg'
import latte from '../assets/latte.jpg'
import cappuccino from '../assets/colde-brew.jpg'
import mocha from '../assets/mocha.jpg'
import Botao from '../components/Botao/Botao'
import cell from '../assets/telefone.jpg'
import wifi from '../assets/wifi.png'
import pag from '../assets/tap-to-pay.png'


export default function Home() {
    return (
        <div>
            <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: 'url(/src/assets/bg-mobile.jpg)' }} >

                <div className='flex justify-center items-center text-amber-50 bg-black opacity-75 h-screen w-full'>
                    <h1 className='text-6xl text-center mt-10  font-extralight'>
                        O futuro do café, hoje.
                    </h1>

                </div>

                <div className=' absolute bottom-10 left-1/2 top-110 transform justify-center -translate-x-1/2'>
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
                        
                    /> 

                </div>
            </section>

            <section>
                <div className='flex flex-col space-y-4 items-center justify-center text-center mt-20 px-4 '>
                    <a href="#"><img className='rounded-lg shadow-lg ' src={expresso} alt="café expresso" /></a>
                    <h3 className='text-2xl text-center pt-5'>Expresso</h3>
                </div>

                 <div className='flex flex-col space-y-4 items-center justify-center text-center mt-10 px-4 '>
                    <a href="#"><img className='rounded-lg shadow-lg ' src={latte} alt="café expresso" /></a>
                    <h3 className='text-2xl text-center pt-5'>Latte</h3>
                </div>

                 <div className='flex flex-col space-y-4 items-center justify-center text-center mt-10 px-4 '>
                    <a href="#"><img className='rounded-lg shadow-lg ' src={cappuccino} alt="café expresso" /></a>
                    <h3 className='text-2xl text-center pt-5'>Cold Brew</h3>
                </div>

                 <div className='flex flex-col space-y-4 items-center justify-center text-center mt-10 px-4 '>
                    <a href="#"><img className='rounded-lg shadow-lg ' src={mocha} alt="café expresso" /></a>
                    <h3 className='text-2xl text-center pt-5'>Mocha</h3>
                </div>
            </section>

            <section>
                <h2 className='mt-10 pl-5 font-bold'>Experiência Tecnológica</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 mb-10'>
                    

                    <div className='flex flex-col space-y-4 items-center justify-center text-center mt-10 px-4 '>

                        <img className='w-16' src={cell} alt="celular mockup" />
                        <h3>App Proprio</h3>
                    </div>

                    <div className='flex flex-col space-y-4 items-center justify-center text-center mt-10 px-4 '>

                        <img className='w-16' src={wifi} alt="celular mockup" />
                        <h3>Conexão Super Rapida</h3>
                    </div>

                    <div className='flex flex-col space-y-4 items-center justify-center text-center mt-10 px-4 '>

                        <img className='w-16' src={pag} alt="celular mockup" />
                        <h3>Pagamento 100% Digital</h3>
                    </div>

                    



                </div>
            </section>
        </div>
    )
}