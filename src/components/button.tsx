import Link from 'next/link'

export default function BotaoCannaDocs() {

    return (
        <div>
            <Link
                href="#cadastro"
                className="transition inline-block rounded-full border border-transparent bg-gradient-to-tr from-blue-400 to-green-500 from-50% px-8 py-4 text-xl font-medium text-gray-100 hover:text-gray-700 hover:bg-gradient-to-tl shadow-xl hover:shadow-md  duration-300 ease-in "

            >
                Acessar estudos
            </Link>
        </div>
    )
}
