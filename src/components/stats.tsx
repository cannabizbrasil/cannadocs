const stats = [
    { id: 1, name: 'Condições Médicas', value: '276' },
    { id: 2, name: 'Canabinóides', value: '62' },
    { id: 3, name: 'Sistemas do Organismo', value: '12' },
    { id: 4, name: 'Terpenos', value: '17' },
]

export default function StatsCannaDocs() {
    return (
        <div className="bg-gray-50 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-cyan-500 to-emerald-500 inline-block text-transparent bg-clip-text">
                            Filtros avançados para pesquisa
                        </h2>
                        <p className="mt-4 text-xl leading-8 text-gray-600">
                            Quer você esteja buscando alívio da dor, gerenciamento do estresse, tratamento de condições neurológicas ou qualquer outra necessidade específica, nosso sistema de filtragem avançado permite que você encontre exatamente o que procura.
                        </p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-gray-400/5 hover:bg-cyan-400 p-8">
                                <dt className="text-md font-semibold leading-6 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-5xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}




