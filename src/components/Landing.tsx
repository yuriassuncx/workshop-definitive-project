import { Link } from "react-router-dom";
import Button from "./Button";

import girafaImg from "../assets/girafa-image.png";

export function Landing() {
    return (
        <section className="sticky top-0 mx-auto flex h-screen max-w-[1350px] items-center justify-between px-8">
            <div className="space-y-8">
                <div className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
                    <span className="block bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                        Fun Zoo
                    </span>
                    <span className="block">O Mais Dinâmico</span>
                    <span className="block">Zoológico da Região</span>
                </div>

                <div className="space-x-8">
                    <Link to="/animals">
                        <Button title="Conheça-nos" />
                    </Link>

                    <a href="/gallery" className="link">Ver Mais</a>
                </div>
            </div>

            <div className="relative hidden h-[450px] w-[350px] transition-all duration-500 md:inline lg:h-[600px] lg:w-[420px]">
                <img
                    src={girafaImg}
                    alt="Imagem de uma girafa fofinha"
                    className="object-contain"
                />
            </div>
        </section>
    )
}