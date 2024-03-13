import React, { useState } from 'react'
import Map from './Map'
import { Dialog } from '@headlessui/react'

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
        <Dialog.Panel className='bg-white min-w-[480px] flex flex-col gap-2 p-4 rounded-lg'>
          <Dialog.Title className='text-xl font-bold'>
            Concordia International School Hanoi
          </Dialog.Title>
          <Dialog.Description className=''>
            School information
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
