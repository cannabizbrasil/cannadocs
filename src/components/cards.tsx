import { ArrowPathIcon, ArrowsPointingInIcon, BeakerIcon, CloudArrowUpIcon, DocumentMagnifyingGlassIcon, FingerPrintIcon, FunnelIcon, InformationCircleIcon, LockClosedIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, QueueListIcon } from '@heroicons/react/24/outline'
import BotaoCannaDocs from './button'

const features = [
    {
        name: 'Busca por Condições Médicas:',
        description:
            'Encontre informações científicas específicas sobre condições médicas, apresentadas de forma clara e com dados-chave agregados para facilitar o uso.',
        icon: DocumentMagnifyingGlassIcon,
    },
    {
        name: 'Busca por Sistemas Orgânicos',
        description:
            'Explore estudos científicos sobre cannabis e o sistema endocanabinoide em nível de sistema, destacando tendências e fornecendo insights especializados.',
        icon: MagnifyingGlassCircleIcon,
    },
    {
        name: 'Busca por Canabinoides',
        description:
            'Realize buscas direcionadas para uma variedade de canabinoides, esclarecendo o panorama científico e as tendências clínicas para CBD, THC e outros.',
        icon: MagnifyingGlassIcon,
    },
    {
        name: 'Busca por Terpenos',
        description:
            'Tenha acesso à ciência completa dos terpenos com facilidade, sem distrações desnecessárias.',
        icon: ArrowsPointingInIcon,
    },
    {
        name: 'Orientação Quimiotípica',
        description:
            'Encontre orientações rápidas sobre tendências quimiotípicas para ajudar na tomada de decisões médicas e escolha de produtos de cannabis.',
        icon: BeakerIcon,
    },
    {
        name: 'Capacidade de Filtragem Completa',
        description:
            'Encontre exatamente a pesquisa que você precisa, com filtros abrangentes em uma ampla gama de dados.',
        icon: FunnelIcon,
    },
    {
        name: 'Informações do Painel',
        description:
            'Obtenha insights cruciais e tendências importantes com cada busca realizada, incluindo análises detalhadas de estudos e classificações de Força da Ciência.',
        icon: InformationCircleIcon,
    },
    {
        name: 'Resumo de Dosagem Clínica',
        description:
            'Analise detalhes de dosagem por condição médica, provenientes de estudos clínicos, para apoiar decisões críticas no tratamento de pacientes.',
        icon: QueueListIcon,
    },
]

export default function CardsCannaDocs() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32" id="recursos">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl lg:text-center">

                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-cyan-500 to-emerald-500 inline-block text-transparent bg-clip-text">
                        Busque a referência que quiser, quando precisar.
                    </h2>

                    <p className="mt-4 text-xl leading-8 text-gray-600">
                        Encontre estudos científicos específicos sobre condições médicas, sistemas orgânicos, canabinoides e terpenos, simplificando sua busca por informações confiáveis e relevantes.
                    </p>

                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
                    <div className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-2 ">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-28 bg-white rounded-2xl p-6 shadow-2xl hover:shadow-verde">
                                <div className="text-2xl font-bold leading-7 bg-gradient-to-r from-azul to-verde inline-block text-transparent bg-clip-text">
                                    <div className="absolute left-6 top-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-azul to-verde">
                                        <feature.icon className="h-12 w-12 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </div>
                                <div className="mt-2 text-lg leading-7 text-gray-800">{feature.description}</div>
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
