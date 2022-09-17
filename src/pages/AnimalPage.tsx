import { useState, useEffect } from "react";
import axios from "axios";

import { AnimalRequest } from "../components/AnimalRequest";
import Button from "../components/Button";
import { Spinner } from "../components/Spinner";

export interface AnimalProps {
    id?: number;
    image_link: string;
    name: string;
    latin_name: string;
    habitat: string;
    diet: string;
    geo_range: string;
}

export function AnimalPage() {
    const [getAnimalsData, setGetAnimalsData] = useState<AnimalProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getAnimalsFromAPI();
    }, []);

    const getAnimalsFromAPI = () => {
        setIsLoading(true);

        setTimeout(() => {
            axios("http://zoo-animal-api.herokuapp.com/animals/rand/1", {
                headers: {
                    Accept: "XMLHttpRequest",
                },
            }).then(response => {
                setGetAnimalsData(response.data);
            }).catch(error => {
                console.log("Ocorreu um erro: " + error);
            }).finally(() => {
                setIsLoading(false);
            });
        }, 200)
    }

    return (
        <>
            {isLoading ? (
                <Spinner />
            ) : (
                <main className="relative h-full bg-secondary bg-cover bg-no-repeat">
                    <div className="flex relative pt-16 pb-12 lg:pb-0 justify-center items-center">
                        <span className="text-center text-4xl bg-clip-text text-transparent font-bold">
                            Conheça os nossos animais
                        </span>
                    </div>
                    <section className="sticky flex flex-col lg:-mt-[100px] mx-auto h-screen max-w-[750px] items-center justify-center px-8">
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

                        <div className="flex-1 md:flex-none pb-12 md:pb-0">
                            <Button title="Gerar outro animal" onClick={getAnimalsFromAPI} />
                        </div>
                    </section>
                </main>
            )}
        </>
    )
}