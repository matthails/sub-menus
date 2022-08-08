import React from 'react';
import Link from 'next/link';
import { Menu, Transition, Fragment } from '@headlessui/react';
import { useRouter } from 'next/router';
import { HamburgerIcon, ChevronDownIcon, ChevronUpIcon } from './';

const links = [
  {
    title: 'Notes',
    menu: [
      {
        title: 'Notes 1',
        href: '/notes1',
      },
      {
        title: 'Notes 2',
        href: '/notes2',
      },
    ],
  },
  {
    title: 'Blog',
    href: '/blog',
  },
  {
    title: 'About',
    href: '/about',
  },
];

function classNames(...classNamees) {
  return classNamees.filter(Boolean).join(' ');
}

export function TopNav() {
  const router = useRouter();
  const { pathname } = router;
  return (
    <header className="flex flex-wrap items-center justify-between bg-slate-50 px-4 md:px-8 py-5 shadow-md shadow-slate-900/5   h-[70px] max-w-7xl mx-auto">
      <Link href="/" aria-label="Home page">
        <a
          href={'/'}
          className={classNames(
            pathname === '/' ? 'text-sky-500 font-medium' : 'text-gray-700',
            'text-sm hover:text-slate-700'
          )}
        >
          Home
        </a>
      </Link>

      <div>
        <ul className="hidden md:flex gap-8 items-center">
          {links.map((link, i) => {
            if (link.href) {
              return (
                <a
                  href={link.href}
                  key={i}
                  className={classNames(
                    pathname.includes(link.href)
                      ? 'text-sky-500 font-medium'
                      : 'text-gray-700',
                    'text-sm hover:text-slate-700'
                  )}
                >
                  {link.title}
                </a>
              );
            } else {
              return (
                <>
                  <Menu as="div">
                    {({ open }) => (
                      <>
                        <Menu.Button
                          key={i}
                          className="text-sm hover:text-slate-700 text-gray-700"
                        >
                          <span className="flex items-center group">
                            {' '}
                            {link.title}
                            {open ? (
                              <ChevronUpIcon className="h-4 w-4 cursor-pointer text-gray-700 hover:text-slate-700 mt-1 ml-0.5 " />
                            ) : (
                              <ChevronDownIcon className="h-4 w-4 cursor-pointer text-gray-700 hover:text-slate-700 mt-1 ml-0.5" />
                            )}
                          </span>
                        </Menu.Button>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-100"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="bg-slate-50  absolute z-50 origin-top-right right-0 top-5  py-[8px] rounded-md shadow-lg  text-sm  text-gray-700 ">
                            {link.menu.map((link, i) => {
                              return (
                                <Menu.Item
                                  key={i}
                                  className={classNames(
                                    pathname.includes(link.href)
                                      ? 'text-sky-500 border-r font-medium '
                                      : 'text-gray-700',
                                    'text-sm py-4 px-6 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100'
                                  )}
                                >
                                  {() => {
                                    return (
                                      <a
                                        href={link.href}
                                        key={i}
                                        className={
                                          pathname === link.href
                                            ? 'text-sky-500 font-medium'
                                            : ''
                                        }
                                      >
                                        {link.title}
                                      </a>
                                    );
                                  }}
                                </Menu.Item>
                              );
                            })}
                          </Menu.Items>
                        </Transition>
                      </>
                    )}
                  </Menu>
                </>
              );
            }
          })}
        </ul>

        <Menu as="div">
          <Menu.Button className="md:hidden">
            <HamburgerIcon className="h-6 w-6  fill-slate-500 hover:fill-slate-600 cursor-pointer text-gray-700 hover:text-slate-700" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="bg-slate-50 md:hidden absolute z-50 origin-top-right right-0 top-5  py-[8px] rounded-md shadow-lg  text-sm  text-gray-700 w-44">
              {links.map((link, i) => {
                if (link.href) {
                  return (
                    <Menu.Item
                      key={i}
                      className={classNames(
                        pathname.includes(link.href)
                          ? 'text-sky-500 border-r font-medium '
                          : 'text-gray-700',
                        'text-sm py-4 px-6 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100'
                      )}
                    >
                      {() => {
                        return (
                          <a
                            href={link.href}
                            key={i}
                            className={classNames(
                              pathname.includes(link.href)
                                ? 'text-sky-500 border-r font-medium '
                                : 'text-gray-700',
                              'text-sm py-4 px-6 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100'
                            )}
                            /*  className={
                              pathname === link.href
                                ? 'text-sky-500 font-medium'
                                : ''
                            } */
                          >
                            {link.title}
                          </a>
                        );
                      }}
                    </Menu.Item>
                  );
                } else {
                  return (
                    <>
                      <Menu as="div">
                        {({ open }) => (
                          <>
                            <Menu.Button
                              key={i}
                              className="text-sm hover:text-slate-700 text-gray-700 w-full"
                            >
                              <span className="flex items-center group text-sm py-4 px-6  w-full whitespace-nowrap bg-transparent hover:bg-slate-100">
                                {' '}
                                {link.title}
                                {open ? (
                                  <ChevronUpIcon className="h-4 w-4 cursor-pointer text-gray-700 hover:text-slate-700 mt-1 ml-0.5" />
                                ) : (
                                  <ChevronDownIcon className="h-4 w-4 cursor-pointer text-gray-700 hover:text-slate-700 mt-1 ml-0.5" />
                                )}
                              </span>
                            </Menu.Button>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-100"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items>
                                {link.menu.map((link, i) => {
                                  return (
                                    <Menu.Item
                                      key={i}
                                      className={classNames(
                                        pathname.includes(link.href)
                                          ? 'text-sky-500 border-r font-medium '
                                          : 'text-gray-700',
                                        'text-sm pl-8 px-6 block w-full whitespace-nowrap bg-transparent hover:bg-slate-100 pr-6 py-4'
                                      )}
                                    >
                                      {() => {
                                        return (
                                          <a
                                            href={link.href}
                                            key={i}
                                            className={
                                              pathname === link.href
                                                ? 'text-sky-500 font-medium'
                                                : ''
                                            }
                                          >
                                            {link.title}
                                          </a>
                                        );
                                      }}
                                    </Menu.Item>
                                  );
                                })}
                              </Menu.Items>
                            </Transition>
                          </>
                        )}
                      </Menu>
                    </>
                  );
                }
              })}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </header>
  );
}

// <a
//   href={link.href}
//   key={i}
//   className={classNames(
//     pathname.includes(link.href)
//       ? 'text-sky-500 font-medium'
//       : 'text-slate-500',
//     'text-sm hover:text-slate-700'
//   )}
// >
//   {link.title}
// </a>
