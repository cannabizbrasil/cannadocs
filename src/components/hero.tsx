import Image from 'next/image'
import BotaoCannaDocs from './button'



export default function HeroCannaDocs() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-50 px-6  pb-72 lg:py-40 lg:px-8">
            <Image
                src="/hero-pc.png"
                alt=""
                width={1920}
                height={1080}
                className="absolute inset-0 -z-10 h-full w-full object-cover hidden md:block"
            />
            <Image
                src="/hero-mobile.png"
                alt=""
                width={1080}
                height={1920}
                className="absolute inset-0 -z-10 h-full w-full object-cover md:hidden "
            />

            <div className="mx-auto max-w-7xl">

                <div className="mt-10 grid max-w-xl grid-cols-1 gap-24 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-azul to-verde inline-block text-transparent bg-clip-text">
                            Descubra o Poder da Cannabis Medicinal através de Estudos e Artigos Científicos.
                        </h2>
                        <p className="mt-8 text-gray-800 text-xl">
                            Aqui, você encontrará uma vasta coleção de artigos e estudos científicos com informações precisas e baseadas em evidências, todos focados em desvendar os inúmeros benefícios terapêuticos da Cannabis.
                        </p>
                        <div className="pt-10">
                            <BotaoCannaDocs />
                        </div>
                        <div className="mt-8 flex space-x-6 md:order-2">
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}