import React from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "About Me", href: "#about", current: true },
  { name: "Skills", href: "#skills", current: false },
  { name: "Projects", href: "#projects", current: false },
  { name: "Contact", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  return (
    <>
      <Disclosure
        as="nav"
        className="xl:flex xl:h-fit xl:w-screen xl:justify-center xl:align-middle backdrop-blur flex justify-center place-content-center top-0 sticky w-fit h-fit align-middle mb-5 xl:z-10 lg:flex lg:h-fit lg:w-screen lg:justify-end lg:align-middle"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-8xl px-8 justify-center">
              <div className="flex flex-1 items-center justify-center">
                <div className="">
                  <div className="inline-flex space-x-4 m-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-lg px-3 py-2 text-6xl xl:text-4xl font-medium lg:text-3xl"
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
    </>
  );
}

export default Header;
