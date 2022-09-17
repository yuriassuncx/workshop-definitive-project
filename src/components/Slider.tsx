import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export function Slider() {
  return (
    <section className="relative mt-7 shadow-2xl max-w-[1200px] mx-2 md:mx-auto rounded-xl border border-emerald-300">
      <div />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={3000}
      >
        <div className="w-full flex justify-between ml-auto mr-auto items-center max-w-[600px] gap-6 h-[250px]">
            <div className="justify-start">
                <img
                    loading="lazy"
                    src="https://i.pinimg.com/originals/fc/9c/2c/fc9c2c6b08f7084df3665c97c9b19864.jpg"
                    alt="Imagem de um visitante"
                    className="w-56 object-cover overflow-hidden rounded-xl"
                />
            </div>

            <div className="max-w-[500px] flex flex-col text-white">
                <p className="text-xs tracking-wide pb-3">
                    “Cara, sensacional!! Se eu tivesse que dar uma dica para algum rolê, com certeza seria para ir visitar o zoo novamente. Insano!!!”
                </p>

                <h3 className="text-lg">Gabriel Breier</h3>
                <span className="text-sm">@_breier</span>
            </div>
        </div>

        <div className="w-full flex justify-between ml-auto mr-auto items-center max-w-[600px] gap-6 h-[250px]">
            <div className="justify-start">
                <img
                    loading="lazy"
                    src="https://1.gall-img.com/hygall/files/attach/images/82/668/970/239/812d0cd13dc7b1559fb78d3d45bd0372.jpg"
                    alt="Imagem de um visitante"
                    className="w-56 h-56 object-cover overflow-hidden rounded-md"
                />
            </div>

            <div className="max-w-[500px] flex flex-col text-white">
                <p className="text-xs tracking-wide pb-3">
                    “Adorei a viagem. Minha família amou conhecer. Espero retornar novamente!”
                </p>

                <h3 className="text-lg">Vitor Santos</h3>
                <span className="text-sm">@_santos345</span>
            </div>
        </div>

        <div className="w-full flex justify-between ml-auto mr-auto items-center max-w-[600px] gap-6 h-[250px]">
            <div className="justify-start">
                <img
                    loading="lazy"
                    src="https://s2.glbimg.com/zDwDyE8mLlf192CnWfAsu4WZYRQ=/0x0:1024x1024/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/m/a/85F904S7uv7JAJyC51XQ/alanzoka-streamer.jpg"
                    alt="Imagem de um visitante"
                    className="w-64 h-52 object-cover overflow-hidden rounded-md"
                />
            </div>

            <div className="max-w-[500px] flex flex-col text-white px-4">
                <p className="text-xs tracking-wide pb-3">
                    “Cara, foi sensacional. Eu não lembro de ter visitado algo tão incrível assim, cara.”
                </p>

                <h3 className="text-lg">Alanzoka</h3>
                <span className="text-sm">@alanzoka</span>
            </div>
        </div>
      </Carousel>
    </section>
  );
}
