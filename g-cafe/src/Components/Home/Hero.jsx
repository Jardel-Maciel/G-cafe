import imgBg from "../../assets/bg-hero.jpg"
export default function Hero() {
    return (
        <section >
            <img className="w-screen bg-cover" src={imgBg} alt="backgound" />
        </section>
    )
}