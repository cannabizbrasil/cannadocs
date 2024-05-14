import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "O que é essa plataforma?",
        answer:
            "O CannaDocs é um agregador de estudos e artigos cientificos sobre cannabis",
    },
    {
        question: "O que é essa plataforma?",
        answer:
            "O CannaDocs é um agregador de estudos e artigos cientificos sobre cannabis",
    },
    {
        question: "O que é essa plataforma?",
        answer:
            "O CannaDocs é um agregador de estudos e artigos cientificos sobre cannabis",
    },
    {
        question: "O que é essa plataforma?",
        answer:
            "O CannaDocs é um agregador de estudos e artigos cientificos sobre cannabis",
    },

]

export default function FaqCannaDocs() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32 px-8  lg:py-40">
            <div className="mx-auto max-w-9xl bg-gradient-to-tr from-azul to-verde rounded-2xl px-8">
                <div className="py-24  ">
                    <div className="mx-auto max-w-7xl divide-y divide-white/10 px-8">
                        <h2 className="text-4xl font-bold text-center leading-10 tracking-tight text-white">Perguntas Frequentes</h2>
                        <div className="mt-10 space-y-6 divide-y divide-white/10">
                            {faqs.map((faq) => (
                                <Disclosure as="div" key={faq.question} className="pt-6">
                                    {({ open }) => (
                                        <>
                                            <div>
                                                <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                                                    <span className="text-xl lg:text-2xl font-semibold leading-7">{faq.question}</span>
                                                    <span className="ml-6 flex h-7 items-center">
                                                        {open ? (
                                                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        ) : (
                                                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                        )}
                                                    </span>
                                                </Disclosure.Button>
                                            </div>
                                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                <p className="text-lg leading-7 text-gray-100">{faq.answer}</p>
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
