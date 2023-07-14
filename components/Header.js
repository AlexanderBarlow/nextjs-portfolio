import React from 'react'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
    { name: 'About Me', href: '#about', current: true },
    { name: 'Skills', href: '#skills', current: false },
    { name: 'Projects', href: '#projects', current: false },
    { name: 'Contact', href: '#', current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Header() {
  return (
    <Disclosure as="nav" className="backdrop-blur-sm col sm:justify-center sm:place-content-center top-0 sticky ">
    {({ open }) => (
      <>
        <div className="mx-auto max-w-7xl px-8 just m-5">
            <div className="flex flex-1 items-center justify-center">
              <div className="">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                         'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'rounded-md px-3 py-2 text-5xl font-medium '
                      )}
                      
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        
      </>
    )}
  </Disclosure>
  )
}

export default Header