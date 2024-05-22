import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { ButtonMensal, ButtonAnual } from './buttonsPagamento'
import Image from 'next/image'
import { LockClosedIcon, ArrowsUpDownIcon, CreditCardIcon } from '@heroicons/react/24/outline'

const tiers = [
    {
        name: 'Mensal',
        id: 'tier-hobby',
        button: <ButtonMensal />,
        priceMonthly: 'R$79',
        recorrency: '/mês',
        total: '',
        description: "Acesso completo a plataforma durante 1 mês",
        features: [
            '+ 6000 artigos e pesquisas',
            'Filtros avançados',
            '7 dias grátis'
        ],
        featured: false,
    },
    {
        name: 'Anual',
        id: 'tier-enterprise',
        button: <ButtonAnual />,
        priceMonthly: 'R$58,25',
        recorrency: '/mês',
        total: 'Valor total R$699,00 por ano',
        description: 'Acesso completo a plataforma durante 1 ano',
        features: [
            '+ 6000 artigos e pesquisas',
            'Filtros avançados',
            '7 dias grátis',
            'Suporte prioritário'
        ],
        featured: true,
    },
]



function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function PriceCannaDocs() {
    return (
        <div className="relative isolate bg-gray-50 px-6 py-24 sm:py-32 lg:px-8" id='cadastro'>
            <div className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl" aria-hidden="true">
                <div
                    className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-verde to-azul opacity-30"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
                <h2 className="mt-2 text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-emerald-500 text-transparent bg-clip-text sm:text-5xl">
                    Desbloqueie o Poder da Medicina Canabinoide Baseada em Evidências.
                </h2>
            </div>
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                Escolha o plano que melhor se adequa a sua necessidade e bons estudos.
            </p>
            <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                {tiers.map((tier, tierIdx) => (
                    <div
                        key={tier.id}
                        className={classNames(
                            tier.featured ? 'relative bg-gradient-to-tr from-azul to-verde shadow-2xl' : 'bg-white/60 sm:mx-8 lg:mx-0',
                            tier.featured
                                ? ''
                                : tierIdx === 0
                                    ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                                    : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',
                            'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10'
                        )}
                    >
                        <h3
                            id={tier.id}
                            className={classNames(
                                tier.featured ? 'text-white' : 'text-verde',
                                'text-base font-semibold leading-7'
                            )}
                        >
                            {tier.name}
                        </h3>
                        <p className="mt-4 flex items-baseline gap-x-2">
                            <span
                                className={classNames(
                                    tier.featured ? 'text-gray-900' : 'text-gray-900',
                                    'text-5xl font-bold tracking-tight'
                                )}
                            >
                                {tier.priceMonthly}
                            </span>
                            <span className={classNames(tier.featured ? 'text-gray-900' : 'text-gray-600', 'text-base')}>{tier.recorrency}</span>

                        </p>
                        <p className="text-gray-800 text-sm">{tier.total}</p>
                        <p className={classNames(tier.featured ? 'text-gray-900' : 'text-gray-600', 'mt-6 text-base leading-7')}>
                            {tier.description}
                        </p>
                        <ul
                            role="list"
                            className={classNames(
                                tier.featured ? 'text-gray-900' : 'text-gray-600',
                                'mt-8 space-y-3 text-sm leading-6 sm:mt-10'
                            )}
                        >
                            {tier.features.map((feature) => (
                                <li key={feature} className="flex gap-x-3">
                                    <CheckIcon
                                        className={classNames(tier.featured ? 'text-gray-800' : 'text-gray-800', 'h-6 w-5 flex-none')}
                                        aria-hidden="true"
                                    />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <div>
                            {tier.button}
                        </div>
                    </div>
                ))}
            </div>

            <div className="">
                <div className="mx-auto grid grid-cols-2 md:grid-cols-3 max-w-7xl px-6 pt-24 pb-12 gap-y-8">
                    <div className="flex items-center justify-center">
                        <div>
                            <CreditCardIcon className="w-8 text-black" />
                        </div>
                        <div className=" pl-4">
                            <h2 className="font-bold text-xl text-gray-800">Pagamento Facilitado</h2>
                            <p className="text-sm text-gray-600">PIX, ou até 12x no cartão</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div>
                            <LockClosedIcon className="w-8 text-black" />
                        </div>
                        <div className=" pl-2">
                            <h2 className="font-bold text-xl text-gray-800">Site Seguro</h2>
                            <p className="text-sm text-gray-600">Compra 100% protegida</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div>
                            <ArrowsUpDownIcon className="w-8 text-black" />
                        </div>
                        <div className=" pl-2">
                            <h2 className="font-bold text-xl text-gray-800">Reembolso Garantido</h2>
                            <p className="text-sm text-gray-600">Até 7 dias para pedir reembolso</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-4xl">
                    <div className="mx-auto">
                        <div>
                            <p className="text-sm text-gray-600 text-center">Formas de Pagamento</p>
                        </div>
                        <div className="flex gap-x-8 justify-center">
                            <Image src="/cartoes/pix.svg" className="w-16 h-auto" width={16} height={16} alt="" />
                            <Image src="/cartoes/visa.svg" className="w-12 h-auto" width={16} height={16} alt="" />
                            <Image src="/cartoes/mastercard.svg" className="w-10 h-auto" width={16} height={16} alt="" />
                            <Image src="/cartoes/american-express.svg" className="w-8 h-auto" width={16} height={16} alt="" />
                            <Image src="/cartoes/diners.svg" className="w-8 h-auto" width={16} height={16} alt="" />
                            <Image src="/cartoes/hipercard.svg" className="w-12 h-auto" width={16} height={16} alt="" />
                            <Image src="/cartoes/elo.svg" className="h-16 w-16" width={16} height={16} alt="" />

                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
