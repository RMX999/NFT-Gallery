import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import ConnectWallet from './ConnectWallet'

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Explore', href: '/explore', current: true },
  { name: 'About us', href: '', current: false },
  { name: 'FAQ', href: '', current: false },
  { name: 'Create collection', href: '', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NacComponent() {
  return (
    <Disclosure as="nav" className="sticky top-o z-50 bg-[#5865F2]">
      {({ open }) => (
        <>
          <div className="max-w mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center pt-px sm:items-stretch sm:justify-start">
                <div className="hidden xl:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 hover:text-white px-0.5 rounded-md text-base font-medium pt-8"
                        aria-current={item.current ? 'page' : undefined}
                      >
                      {item.name == "WhitePaper"
                        ? <a href = "/docs/WhitePaper.pdf" target = "_blank">WhitePaper</a>
                        : <>{item.name}</>
                        }
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-around pt-3">
                <ConnectWallet/>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:text-white',
                    'block px-3 py-2 rounded-md text-lg font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                    <div>
                    {item.name == "WhitePaper"
                        ? <a href = "/docs/WhitePaper.pdf" target = "_blank">WhitePaper</a>
                        : <>{item.name}</>
                    }
                    </div>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}