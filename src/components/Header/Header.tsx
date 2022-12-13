import Link from "next/link";
import Image from "next/image";
import Logo from "../Logo/Logo";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const getNavigation = (pathname: string) => {
  return [
    {
      name: "Foundation",
      href: "/foundation",
      current: pathname === "/foundation",
    },
    { name: "Projects", href: "/projects", current: pathname === "/projects" },
    {
      name: "Tech Stack",
      href: "/techstack",
      current: pathname === "/techstack",
    },
    {
      name: "Guestbook",
      href: "/guestbook",
      current: pathname === "/guestbook",
    },
  ];
};
const userNavigation = [{ name: "Sign out", href: "#" }];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Header({ h1 = "" }) {
  const router = useRouter();
  const { data: session } = useSession();
  const { pathname } = router;
  return (
    <div className="bg-gray-800 pb-32">
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="border-b border-gray-700">
                <div className="flex h-16 items-center justify-between px-4 sm:px-0">
                  <div className="flex items-center">
                    <div className="w-10">
                      <Link href="/">
                        <Logo />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {getNavigation(pathname).map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "rounded-md px-3 py-2 text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            {session && session.user ? (
                              <Image
                                className="h-8 w-8 rounded-full"
                                src={session.user.image || ""}
                                alt=""
                                width={32}
                                height={32}
                              />
                            ) : (
                              <UserIcon className="h-5 w-5 fill-white" />
                            )}
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {session && (
                              <>
                                <span className="ml-4 text-sm font-semibold">
                                  Hi {session.user?.name?.split(" ")[0]}!
                                </span>
                                <hr className="mt-2" />
                              </>
                            )}
                            {session && (
                              <Menu.Item>
                                <Link
                                  className="block px-4 py-2 text-sm text-gray-700"
                                  href=""
                                  onClick={() => signOut()}
                                >
                                  Sign out
                                </Link>
                              </Menu.Item>
                            )}
                            {!session && (
                              <Menu.Item>
                                <Link
                                  className="block px-4 py-2 text-sm text-gray-700"
                                  href=""
                                  onClick={() => signOut()}
                                >
                                  Sign in
                                </Link>
                              </Menu.Item>
                            )}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="absolute top-[65px] z-10 w-full border-b border-gray-700 bg-gray-800 md:hidden">
              <div className="space-y-1 px-2 py-3 sm:px-3">
                {getNavigation(pathname).map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    {session && session.user ? (
                      <Image
                        className="h-8 w-8 rounded-full"
                        src={session.user.image || ""}
                        alt=""
                        width={32}
                        height={32}
                      />
                    ) : (
                      <UserIcon className="h-5 w-5 fill-white" />
                    )}
                  </div>
                  <div className="ml-3 text-base font-medium leading-none text-white">
                    {session?.user?.name}
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  <Link
                    href=""
                    onClick={() => signOut()}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <header className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-white text-center">{h1}</h1>
        </div>
      </header>
    </div>
  );
}
