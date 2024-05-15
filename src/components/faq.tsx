import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "O que é a Plataforma de Pesquisa em Cannabis Medicinal?",
        answer:
            "É uma ferramenta SaaS que agrega artigos científicos sobre cannabis medicinal, facilitando a pesquisa para médicos através de filtros avançados por condições médicas, terpenos, canabinoides e sistemas do organismo.",
    },
    {
        question: "Quais são os principais recursos da plataforma?",
        answer:
            "Recursos incluem pesquisa por condição médica, sistema do organismo, canabinoides, terpenos, guias de quimiotipos e capacidade de filtragem completa.",
    },
    {
        question: "Existem recursos para ajudar na identificação de tendências científicas?",
        answer:
            "Sim, o painel de insights mostra tendências e avaliações da força da ciência, ajudando a identificar as principais descobertas e tendências em cannabis medicinal.",
    },
    {
        question: "Como posso realizar uma busca por canabinoides específicos?",
        answer:
            "A pesquisa por canabinoides permite buscas direcionadas para substâncias como CBD e THC, apresentando o estado atual da ciência e tendências clínicas.",
    },
    {
        question: "A plataforma permite a busca por terpenos?",
        answer:
            "Sim, a função de busca por terpenos oferece acesso direto à ciência completa dos terpenos, permitindo uma compreensão aprofundada de suas propriedades.",
    },
    {
        question: "O que é o guia de quimiotipos?",
        answer:
            "O guia de quimiotipos fornece orientações rápidas sobre as tendências de quimiotipos para informar decisões médicas e escolhas de produtos de cannabis.",
    },
    {
        question: "Como os dados são apresentados na plataforma?",
        answer:
            "Os dados são agregados e apresentados de forma simplificada, com pontos chave destacados para facilitar a compreensão e a aplicação prática das informações.",
    },
    {
        question: "A plataforma é atualizada frequentemente?",
        answer:
            "Sim, a plataforma é atualizada regularmente com novos estudos e artigos para garantir que os usuários tenham acesso às informações mais recentes.",
    },
    {
        question: "Existem ferramentas de apoio à decisão clínica na plataforma?",
        answer:
            "Sim, além das pesquisas, a plataforma oferece resumos de dosagem clínica e orientações baseadas em evidências para apoiar decisões críticas dos pacientes.",
    },
    {
        question: "Como posso dar feedback sobre a plataforma?",
        answer:
            "Os usuários podem enviar feedback através de um formulário online ou durante entrevistas estruturadas de follow-up que ajudam a coletar insights profundos sobre a experiência do usuário.",
    },
    {
        question: "Quem deve usar essa plataforma?",
        answer:
            "A plataforma é destinada a médicos e profissionais de saúde que desejam basear suas práticas clínicas em evidências científicas sólidas sobre cannabis medicinal.",
    },
    {
        question: "É necessário ter conhecimento prévio sobre cannabis medicinal para usar a plataforma?",
        answer:
            "Não é necessário, pois a plataforma é projetada para ser acessível a novatos e experientes, com recursos educacionais que ajudam no entendimento dos dados.",
    },
    {
        question: "Posso usar a plataforma em dispositivos móveis?",
        answer:
            "Sim, a plataforma é adaptada para uso em dispositivos móveis, permitindo acesso fácil e conveniente em qualquer lugar.",
    },
    {
        question: "Existem custos associados ao uso da plataforma?",
        answer:
            "A fase beta é gratuita e limitada a usuários convidados. Informações sobre planos e assinaturas podem ser obtidas diretamente no site da plataforma, incluindo detalhes sobre versões de teste e assinaturas pagas.",
    },


]

export default function FaqCannaDocs() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32 px-8  lg:py-40">
            <div className="mx-auto max-w-9xl bg-gradient-to-tr from-azul to-verde rounded-2xl lg:px-8">
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
