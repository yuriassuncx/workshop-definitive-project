import * as Dialog from "@radix-ui/react-dialog";
import { MagnifyingGlassPlus } from "phosphor-react";

import personSvg from "../assets/astronauta.svg";
import { HelpModal } from "../components/HelpModal";

export function HelpPage() {
    return (
        <main className="bg-[#E7ECEE] h-screen bg-no-repeat bg-cover bg-galaxy">
            <div className="flex relative pt-16 pb-16 justify-center items-center">
                <span className="text-center text-4xl bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-bold">
                    Possui algum problema?
                </span>
            </div>

            <section className="sticky mx-4 md:mx-auto flex max-w-[800px] items-center justify-between px-8 pt-16 pb-4 bg-slate-800 rounded-md lg:rounded-2xl">
                <div className="flex flex-col tracking-wide text-center lg:text-start items-center gap-12">
                    <h1 className="text-xl font-bold text-white">
                        Envie-nos o seu problema clicando no botão abaixo:
                    </h1>

                    {<Dialog.Root>
                        <Dialog.Trigger className="px-4 py-3 bg-amber-500 hover:bg-amber-600 font-bold transition-colors duration-200 text-white rounded-md flex items-center gap-3">
                            <MagnifyingGlassPlus weight="bold" />
                            Contatar
                        </Dialog.Trigger>

                        <HelpModal/>
                    </Dialog.Root>}
                </div>
                <div className="flex-1">
                    <img src={personSvg} alt="SVG de um astronauta" className="w-full h-full" />
                </div>
            </section>
        </main>
    )
}