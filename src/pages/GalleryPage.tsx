import { AnimalRequest } from "../components/AnimalRequest";
import { getData } from "../hooks/getData";

export function GalleryPage() {
    const { getAnimalsData } = getData();

    return (
        <main className="bg-[#E7ECEE] bg-galaxy bg-no-repeat bg-cover">
            <div className="flex relative pt-16 justify-center items-center">
                <span className="text-center text-4xl bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent font-bold">
                    Conheça 10 dos nossos animais
                </span>
            </div>

            <section className="sticky mx-auto flex max-w-[1350px] items-center justify-between px-8">
                <div className="pt-28 grid grid-cols-1 lg:grid-cols-2 gap-x-6">
                    {getAnimalsData.map((item) => {
                        return (
                            <AnimalRequest
                                key={item.id}
                                name={item.name}
                                latin_name={item.latin_name}
                                habitat={item.habitat}
                                diet={item.diet}
                                geo_range={item.geo_range}
                                image_link={item.image_link}
                            />
                        )
                    })}
                </div>
            </section>
        </main>
    )
}