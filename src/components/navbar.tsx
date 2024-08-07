
import { useState } from 'react'
import Image from 'next/image'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, } from '@heroicons/react/24/outline'


const navigations = [
    { name: 'Recursos', href: '#recursos' },
    { name: 'Preço', href: '#cadastro' },
    { name: 'FAQ', href: '#faq' },


]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-gradient-to-tr from-verde to-azul px-6 ">
            <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 " aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5">
                        <span className="sr-only">CannaDocs</span>
                        <Image
                            className="h-6 lg:h-12 w-auto"
                            src="/logo-cannadocs.png"
                            width={250}
                            height={80}
                            alt=""
                        />
                    </a>
                </div>
                <div className="flex">
                </div>
                <div className="flex flex-1  justify-end">
                    <a href="https://airtable.com/appPYfdqtuYZsLmSS/pagdEbd3mtmXS8xfd" className="text-sm font-semibold pt-1 leading-6 text-white">
                        Log in  →
                    </a>
                    <button
                        type="button"
                        className=" inline-flex rounded-md ml-8 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only my-auto">abrir menu</span>
                        <Bars3Icon className="h-8 w-8" aria-hidden="true" />
                    </button>
                </div>
            </nav >
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-verde px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">

                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">fechar menu</span>
                            <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6 border-b border-gray-700/100">
                                {navigations.map((navigation) => (
                                    <div key={navigation.name}>
                                        <a
                                            href={navigation.href}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {navigation.name}
                                        </a>

                                    </div>
                                ))}

                            </div>
                            <div className="py-6 ">
                                <a
                                    href="https://airtable.com/appPYfdqtuYZsLmSS/pagdEbd3mtmXS8xfd"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                                >
                                    Log in  →
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header >
    )
}
