const stats = [
    { id: 1, name: 'Condições Médicas', value: '276' },
    { id: 2, name: 'Canabinoides', value: '62' },
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
                            + de 6.000 estudos e artigos
                        </h2>
                        <p className="mt-4 text-xl leading-8 text-gray-600">
                            O CannaDocs oferece um sistema de filtragem avançado que permite que você encontre rapidamente as informações mais relevantes para suas necessidades clínicas.
                        </p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col bg-gray-400/5 hover:bg-cyan-400 p-8">
                                <div className="text-md font-semibold leading-6 text-gray-600">{stat.name}</div>
                                <div className="order-first text-5xl font-bold tracking-tight text-gray-900">{stat.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}




