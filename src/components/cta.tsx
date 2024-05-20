import Image from "next/image";
import BotaoCannaDocs from "./button";

export default function CtaCannaDocs() {
    return (
        <div className="bg-gray-50 ">
            <div className="mx-auto max-w-9xl  sm:py-32 overflow-hidden lg:overflow-visible ">
                <div className="relative isolate  bg-gradient-radial to-azul from-verde to-90% px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">

                    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
                            Descomplique sua busca por artigos e estudos sobre cannabis medicinal. Encontre tudo o que precisa em um só lugar.
                        </h2>

                        <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                            <BotaoCannaDocs />

                        </div>
                    </div>
                    <div className=" mt-16 ">
                        <Image
                            className=" lg:absolute w-[34rem] lg:w-[57rem] max-w-none"
                            src="/mockup-tela.png"
                            alt="App screenshot"
                            width={1824}
                            height={1080}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
