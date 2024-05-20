import HubspotCannaDocsMensal from "./hubspotFormMensal";


export default function CadastroMensal() {

    return (
        <div className="isolate bg-gray-50 px-6 py-8 lg:px-8" id="cadastro">

            <div className="mx-auto max-w-2xl text-center">
                <h2 className="py-8 text-3xl font-bold tracking-tight bg-gradient-to-r from-cyan-500 to-emerald-500 inline-block text-transparent bg-clip-text">Faça seu cadastro</h2>

            </div>
            <div className="max-w-4xl mx-auto">
                <HubspotCannaDocsMensal />
            </div>
        </div>
    )
}
