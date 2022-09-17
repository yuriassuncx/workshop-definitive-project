import { AnimalProps } from "../pages/AnimalPage";

export function AnimalRequest({
    name,
    latin_name,
    image_link,
    habitat,
    geo_range,
    diet
}: AnimalProps) {
    return (
        <div className="flex flex-col md:flex-row w-full md:mt-36 lg:mt-0 mb-12 space-y-8 gap-x-12 px-12 lg:py-14 text-start items-center justify-between bg-emerald-400 rounded-xl hover:scale-105 duration-150 transition ease-out cursor-pointer">
            <div className="flex flex-col order-2 md:order-1 text-center lg:text-start max-w-[300px]">
                <h1 className="block text-lg xl:text-3xl bg-gradient-to-r from-orange-500 to-orange-500 bg-clip-text text-transparent font-bold">{name}</h1>
                <h2 className="text-sm md:text-lg xl:text-3xl">{latin_name}</h2>

                <div className="flex flex-col space-y-1 lg:space-y-4 pb-4">
                    <span className="pt-10 text-sm tracking-wide">Habitat: {habitat}</span>
                    <span className="text-xs xl:text-sm tracking-wide">Diet: {diet}</span>
                    <span className="text-xs xl:text-sm tracking-wide">Location: {geo_range}</span>
                </div>

            </div>

            <div className="flex-1 order-1 md:order-2">
                <img
                    src={image_link}
                    alt={`Imagem de um ${name}`}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>
        </div>
    )
}