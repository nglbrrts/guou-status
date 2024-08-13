'use client'

import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions} from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

// Define la interfaz para el tipo de datos de los servicios
interface Service {
  id: number;
  name: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 1,
    name: 'Plataforma',
    imageUrl: './img/Logo-Web.svg',
  },
  {
    id: 2,
    name: 'AWS',
    imageUrl: './img/Logo-AWS.svg',
  },
  {
    id: 3,
    name: 'Integración SII',
    imageUrl: './img/Logo-SII.svg',
  },
  {
    id: 4,
    name: 'Integración TGR',
    imageUrl: './img/Logo-TGR.svg',
  },
  {
    id: 5,
    name: 'Backoffice',
    imageUrl: './img/Logo-PGC.svg',
  },
  {
    id: 6,
    name: 'Sitio Web',
    imageUrl: './img/Logo-Web.svg',
  },
]

export default function Example() {
  const [query, setQuery] = useState('')
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const filteredServices =
    query === ''
      ? services
      : services.filter((service) => {
          return service.name.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      as="div"
      value={selectedService}
      onChange={(service: Service) => {
        setQuery('')
        setSelectedService(service)
      }}
    >
      <div className="relative">
        <ComboboxInput
          className="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(service: Service) => service?.name || ''}
        />
        <ComboboxButton className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </ComboboxButton>

        {filteredServices.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredServices.map((service) => (
              <ComboboxOption
                key={service.id}
                value={service}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <div className="flex items-center">
                  <img src={service.imageUrl} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" />
                  <span className="ml-3 truncate group-data-[selected]:font-semibold">{service.name}</span>
                </div>

                <span className="absolute inset-y-0 right-0 hidden items-center pr-4 text-indigo-600 group-data-[selected]:flex group-data-[focus]:text-white">
                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                </span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  )
}
