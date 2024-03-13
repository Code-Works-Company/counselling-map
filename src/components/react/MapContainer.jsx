import React, { useState } from 'react'
import Map from './Map'
import { Dialog } from '@headlessui/react'

const links = [
  {
    name: 'Profile',
    href: '#',
  },
  {
    name: 'Website',
    href: '#',
  },
  {
    name: 'Calendar',
    href: '#',
  },
]

export default function MapContainer() {
  const [open, setOpen] = useState(false)
  const [school, setSchool] = useState({})

  return (
    <div class='relative p-8 font-sans'>
      <Map
        schools={[
          {
            logo: '/school.webp',
            location: [105.7948, 21.1454],
          },
          {
            logo: '/school.webp',
            location: [105.8, 21.0],
          },
        ]}
        setOpen={setOpen}
      />
      <Dialog
        className='fixed inset-0 flex items-center justify-center bg-black/70'
        open={open}
        onClose={() => setOpen(false)}
      >
        <Dialog.Panel className='bg-white min-w-[480px] gap-4 flex flex-col p-4 rounded-lg leading-none relative'>
          <div>
            <Dialog.Title className='text-lg font-semibold whitespace-nowrap leading-none tracking-tight'>
              Concordia International School Hanoi
            </Dialog.Title>
            <h3 className='text-sm text-gray-500 mt-1'>
              Van Tri Golf Estate, Kim Nỗ, Đông Anh, Hà Nội.
            </h3>
          </div>
          <Dialog.Description className='text-sm'>
            <div className='grid gap-4'>
              <div className='grid grid-cols-2 gap-3 text-sm'>
                <div className='flex flex-col'>
                  <dt className='font-semibold text-xs'>Counselor</dt>
                  <dd>Ms. Sarah Johnson</dd>
                </div>
                <div className='flex flex-col '>
                  <dt className='font-semibold text-xs'>Email</dt>
                  <dd>sarah.johnson@example.com</dd>
                </div>
                <div className='flex flex-col '>
                  <dt className='font-semibold text-xs'>Phone</dt>
                  <dd>(555) 123-4567</dd>
                </div>
                <div className='flex flex-col '>
                  <dt className='font-semibold text-xs'>Contact Point</dt>
                  <dd>Front Desk</dd>
                </div>
                <div className='flex flex-col '>
                  <dt className='font-semibold text-xs'>Preferred time</dt>
                  <dd>10am - 12pm</dd>
                </div>
              </div>
              <div className='font-semibold flex flex-row gap-4 text-sm'>
                {links.map((link) => (
                  <a
                    href={link.href}
                    className='flex gap-0.5 hover:underline underline-offset-2 flex-row items-center hover:text-black'
                  >
                    {link.name}{' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 16 16'
                      fill='currentColor'
                      className='w-4 h-4'
                    >
                      <path d='M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z' />
                      <path d='M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z' />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </Dialog.Description>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-4 h-4 absolute right-4 top-4 text-gray-600 hover:text-gray-900 focus:text-gray-900 cursor-pointer transition-all'
            onClick={() => setOpen(false)}
          >
            <path d='M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z' />
          </svg>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
