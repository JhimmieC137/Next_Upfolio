'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export const pageList = [
  {
    id: 1,
    name: 'About',
    href: '/about'
  },
  {
    id: 2,
    name: 'Programs',
    href: '/programs'
  },
  {
    id: 3,
    name: 'Projects',
    href: '/projects'
  },
  {
    id: 4,
    name: 'Blogs',
    href: '/blogs'
  },
  {
    id: 5,
    name: 'Contact',
    href: '/contact'
  },
  // More pages...
]

export default function MobileNav({ sideBarState, setSideBarState } : { sideBarState : boolean, setSideBarState : Dispatch<SetStateAction<boolean>> }) {
  const [open, setOpen] = useState(true)

  return (
    <Dialog className="relative z-50 lg:hidden" open={sideBarState} onClose={setSideBarState}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-64 md:max-w-80">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">Pages</DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setSideBarState(false)}
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                    <div className="mt-8">
                        <div className="flow-root">
                            <ul role="list" className="-my-6 divide-y divide-gray-200">
                                {pageList.map((page) => (
                                <li key={page.id} className="flex py-3">
                                    <div className="ml-4 flex flex-1 flex-col">
                                      <Link href={page.href} className="text-sm text-gray-500">{page.name}</Link>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  )
}