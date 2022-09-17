import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import {
    Bird,
    House,
    PawPrint,
    Camera,
    Info,
    List,
    X
} from "phosphor-react";
import Button from "./Button";

export function Header() {
    const [isModalOpened, setIsModalOpened] = useState(false);

    function handleOpenSidebar() {
        setIsModalOpened(!isModalOpened);
    }

    return (
        <>
            <header className="sticky top-0 z-10 flex w-full items-center justify-between bg-[#E7ECEE] p-4 shadow-md">
                <div className="flex items-center justify-center md:w-1/5">
                    <Link to="/">
                        <div className="relative h-12 items-center flex gap-3 cursor-pointer opacity-80 transition hover:opacity-100 duration-100">
                            <Bird
                                alt="Logo da FunZoo"
                                weight="bold"
                                className="w-8 h-8 text-amber-600"
                            />

                            <h2 className="block text-xl md:text-2xl bg-gradient-to-r from-orange-500 to-yellow-500 font-bold bg-clip-text text-transparent">
                                Fun Zoo
                            </h2>
                        </div>
                    </Link>
                </div>

                <div className="hidden flex-1 items-center justify-center space-x-8 md:flex">
                    <Link to="/" className="headerLink group">
                        <House className="w-4 h-4" />
                        <span className="span">Início</span>
                    </Link>

                    <Link to="/animals" className="headerLink group">
                        <PawPrint className="w-4 h-4" />
                        <span className="span">Animais</span>
                    </Link>

                    <Link to="/gallery" className="headerLink group">
                        <Camera className="w-4 h-4" />
                        <span className="span">Galeria</span>
                    </Link>

                    <Link to="/help" className="headerLink group">
                        <Info className="w-4 h-4" />
                        <span className="span">Ajuda</span>
                    </Link>
                </div>

                <div className="hidden md:flex items-center justify-center gap-x-4 md:w-1/5">
                    <Button noIcon title="Comprar ingressos" />
                </div>

                <div className="flex md:hidden items-center justify-center gap-x-4 md:w-1/5">
                    {isModalOpened ? (
                        <button onClick={handleOpenSidebar}>
                            <X className="w-8 h-8" />
                        </button>
                    ) : (
                        <button onClick={handleOpenSidebar}>
                            <List className="w-8 h-8" />
                        </button>
                    )}
                </div>
            </header>

            {isModalOpened && (
             <main className="w-full h-full pb-12 bg-gradient-to-br from-cyan-500 to-emerald-500 sticky z-[100]">
                <div className="flex flex-col pt-6 items-center text-center justify-center space-y-6">
                    <Link to="/">
                        <Button noIcon title="Início" />
                    </Link>

                    <Link to="/animals">
                        <Button title="Animais" />
                    </Link>

                    <Link to="/gallery">
                        <Button title="Galeria" />
                    </Link>

                    <Link to="/help">
                        <Button title="Ajuda" />
                    </Link>

                    <Button noIcon title="Comprar ingressos" />
                </div>
             </main>   
            )}

            <Outlet />
        </>
    )
}