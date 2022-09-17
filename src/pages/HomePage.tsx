import { Card } from "../components/Card";
import { Landing } from "../components/Landing";
import { Slider } from "../components/Slider";

import zooPersons from "../assets/zoo-persons.png";

export function HomePage() {
    return (
        <>
            <main className="relative h-[200vh] bg-[#E7ECEE]">
                <Landing />
            </main>

            <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B] bg-galaxy bg-no-repeat bg-cover">
                <div className="space-y-10 py-16">
                    <h1 className="text-center text-lg text-[#DBAC2C] font-bold tracking-wide md:text-4xl">
                        Olá, Seja Bem-Vindo!
                    </h1>

                    <div className="mx-auto flex flex-col px-2 lg:px-0 justify-center text-center max-w-fit pt-10 sm:px-4 lg:max-w-[800px]">
                        <h1 className="text-3xl lg:text-6xl text-white font-bold w-full">
                            Divirta-se com sua família conhecendo o nosso zoológico
                        </h1>

                        <span className="tracking-wide text-sm lg:text-base opacity-80 pt-12 text-white">
                            Recentemente criado, o Fun Zoo conta com mais de 50 animais distintos para você conhecer, além de possuirmos excelentes profissionais e incríveis eventos! 🦒
                        </span>

                    </div>

                    <div className="mx-auto max-w-fit pt-2 lg:pb-12 sm:px-4">
                        <div className="block">
                            <iframe className="w-[250px] h-[250px]sm:w-[320px] sm:h-[320px] md:w-[350px] md:h-[350px] lg:w-[900px] lg:h-[700px]" src="https://www.youtube.com/embed/wdNMfhNx5DI" title="Leão marinho - Apresentação no Zoo Aquarium de Madrid" frameBorder="0" allow="autoplay" allowFullScreen></iframe>
                        </div>
                    </div>

                    <div className="mx-auto max-w-md sm:max-w-fit pt-12 px-4 pb-24 sm:px-4">
                        <h1 className="flex text-lg lg:text-2xl text-center justify-center pb-14 text-white font-medium">
                            Queremos trazer a melhor experiência para você. Para isto, temos alguns diferenciais:
                        </h1>

                        <div className="grid w-full sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
                            <Card title="Higiene" text="Nosso zoológico é altamente higiênico. Contamos com limpeza diária." />
                            <Card title="Localização" text="Nosso zoológico possui uma localização segura e ideal para você e a sua família." />
                            <Card title="Grupo" text="Você conhecerá o nosso zoológico por meio de grupos, os quais os guiarão durante a viagem." />
                            <Card title="Estabelecimentos" text="Nosso zoológico possui estabelecimentos dentro. Assim, você poderá se divertir, mas também não passar fome ou sede." />
                            <Card title="Segurança" text="Para manter um ambiente saudável, possuímos vigilantes que mantém a ordem e trazem segurança à sua família." />
                            <Card title="Enfermaria" text="Caso algum acidente ocorra, você não precisará se locomover até um hospital nas pressas, pois possuímos uma equipe médica em nossa instituição." />  
                        </div>
                    </div>

                    <div className="mx-auto max-w-md sm:max-w-fit pt-12 px-4 pb-24 sm:px-4">
                        <h1 className="flex text-3xl lg:text-5xl text-center justify-center pb-14 text-white font-medium">
                            Depoimentos
                        </h1>

                        <Slider />
                    </div>

                    <div className="mx-auto max-w-md sm:max-w-fit pt-12 px-4 pb-24 sm:px-4">
                        <h1 className="flex text-3xl lg:text-5xl text-center justify-center pb-14 text-white font-medium">
                            Visite o Fun Zoo!
                        </h1>

                        <div className="flex flex-col max-w-[600px] items-center text-center">
                            <img src={zooPersons} alt="Imagem de personagens de um zoológico" />

                            <span className="tracking-wide text-sm lg:text-base opacity-80 pt-12 text-white">
                                O Fun Zoo é demais. Venha se divertir e conhecer os nossos eventos 🦒
                            </span>

                            <span className="tracking-wide text-sm lg:text-base opacity-80 pt-12 text-white">
                                Localização: Northam, Austrália
                            </span>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}