import Image from 'next/image'
import BotaoCannaDocs from './button'

const testimonials = [
    {
        body: 'A plataforma de artigos sobre cannabis medicinal foi um verdadeiro achado para mim! Como médica em busca de informações confiáveis, ter acesso a estudos científicos em um único lugar facilitou muito minha jornada. Recomendo a todos que buscam conhecimento sério e embasado.',
        author: {
            name: 'Dra. Endy',
            handle: 'Cirurgiã Dentista',
            imageUrl:
                '/dra-endy.jpg',
        },
    },
    {
        body: 'Como profissional da saúde, sempre busco embasar minhas práticas em evidências científicas. Encontrar uma plataforma que reúne estudos sobre cannabis medicinal de forma organizada e acessível foi um alívio. Parabéns pelo excelente trabalho!',
        author: {
            name: 'Dr. Rodrigo',
            handle: 'Médico',
            imageUrl:
                '/dr-rodrigo-eboli-da-costa.jpg',
        },
    },
    {
        body: 'Eu estava cansada de passar horas pesquisando na internet por informações sobre cannabis medicinal. Encontrei tudo o que precisava nessa plataforma, desde estudos sobre diferentes condições até análises específicas de terpenos e canabinoides. Simplificou muito minha vida!',
        author: {
            name: 'Dra. Lorena Feliz',
            handle: 'Médica',
            imageUrl:
                '/dra-lorena-feliz.jpg',
        },
    },


]

export default function DepoimentosCannaDocs() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-transparent bg-clip-text">
                        O que nossos usuários falam da plataforma
                    </h2>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-7xl">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.author.handle} className="pt-8 ">
                                <figure className="rounded-2xl bg-gray-100 p-8 text-sm leading-6">
                                    <blockquote className="text-gray-900">
                                        <p>{`“${testimonial.body}”`}</p>
                                    </blockquote>
                                    <figcaption className="mt-6 flex items-center gap-x-4">
                                        <Image className="h-12 w-12 rounded-full bg-gray-50" width={120} height={120} src={testimonial.author.imageUrl} alt="" />
                                        <div>
                                            <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                                            <div className="text-sm text-gray-600">{testimonial.author.handle}</div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="text-center pt-14">
                    <BotaoCannaDocs />
                </div>
            </div>
        </div>
    )
}
