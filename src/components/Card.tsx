interface CardProps {
    title: string;
    text: string;
}

export function Card({
    text,
    title
}: CardProps) {
    return (
        <section className="flex flex-col bg-[#121214] border border-emerald-300 px-6 py-12 rounded-2xl items-center max-w-[420px] hover:scale-105 duration-150 ease-out cursor-pointer">
            <header className="flex items-center justify-center pb-8">
                <h2 className="font-bold text-xl text-white">{title}</h2>
            </header>

            <main className="flex items-center justify-center">
                <span className="text-white opacity-80 text-center text-sm md:text-base">
                    {text}
                </span>
            </main>
        </section>
    )
}