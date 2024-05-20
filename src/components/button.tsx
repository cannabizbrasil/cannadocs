import Link from 'next/link'
import { Fragment, useState } from 'react'
import ModalMensal from './modalMensal'
import ModalAnual from './modalAnual'

export default function BotaoCannaDocs() {
    return (
        <div className="transition inline-block rounded-full border border-transparent bg-gradient-to-tr from-blue-400 to-green-500 from-50% px-8 py-4 text-xl font-medium text-gray-100 hover:text-gray-700 hover:bg-gradient-to-tl shadow-xl hover:shadow-md  duration-300 ease-in ">
            <Link
                href="#cadastro"


            >
                Acessar estudos
            </Link>
        </div>
    )
}


