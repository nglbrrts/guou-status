"use client"
import Head from 'next/head';
import Header from '@/components/Header'
import Link from 'next/link';
import MonthSelector from '@/components/MonthSelector';
import DateDivider from '@/components/DateDivider';
import IncidentEvent from '@/components/IncidentEvent';
import { WrenchIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import ComboBox from '@/components/ComboBox'

const incidentes = [
    { servicio: 'Plataforma', fecha: '05/05/2024', hora: '12:00:00', duración: '4 horas 5 minutos', estado: 'Incidente' },
    { servicio: 'Base de datos', fecha: '05/05/2024', hora: '12:00:00', duración: '4 horas 5 minutos', estado: 'Mantenimiento' },
    { servicio: 'Plataforma', fecha: '05/05/2024', hora: '12:00:00', duración: '4 horas 5 minutos', estado: 'Incidente' },
    { servicio: 'Base de datos', fecha: '05/05/2024', hora: '12:00:00', duración: '4 horas 5 minutos', estado: 'Mantenimiento' },
    { servicio: 'Plataforma', fecha: '05/05/2024', hora: '12:00:00', duración: '4 horas 5 minutos', estado: 'Incidente' },
    { servicio: 'Base de datos', fecha: '05/05/2024', hora: '12:00:00', duración: '4 horas 5 minutos', estado: 'Mantenimiento' },
    { servicio: 'Plataforma', fecha: '05/05/2024', hora: '12:00:00', duración: '4 horas 5 minutos', estado: 'Incidente' },
    { servicio: 'Base de datos', fecha: '05/05/2024', hora: '12:00:00', duración: '4 horas 5 minutos', estado: 'Mantenimiento' },
    { servicio: 'Plataforma', fecha: '05/05/2024', hora: '12:00:00', duración: '4 horas 5 minutos', estado: 'Incidente' },
    { servicio: 'Base de datos', fecha: '05/05/2024', hora: '12:00:00', duración: '4 horas 5 minutos', estado: 'Mantenimiento' },
]


export default function Historial() {
    return (
        <div className="dm-sans">
            <Head>
                <title>Historial de incidentes</title>
                <meta name="description" content="Listado de incidentes en nuestros servicios por fecha y hora" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='w-full h-full bg-white flex flex-col gap-7'>
                <div className='w-full max-w-5xl mx-auto h-fit flex flex-col gap-3 justify-center px-4 py-6 sm:py-12 dm-sans text-center'>
                    <h1 className='text-3xl text-neutral-900 font-semibold'>Historial de incidentes</h1>
                    <p className='leading-6'>A continuación encontrarás el listado de incidentes en nuestros servicios por fecha y hora. Si tienes un problema que no aparece aquí, comunícate con el <Link href="mailto:centrodeayuda@guou.cl" className=" text-indigo-500 hover:text-indigo-300 transition-all">equipo de asistencia</Link>. También puedes consultar nuestra sección de <Link href="https://guou.cl/preguntas-frecuentes/" target="_blank" className=" text-indigo-500 hover:text-indigo-300 transition-all">preguntas frecuentes</Link></p>
                </div>
                <div className='w-full max-w-5xl mx-auto p-3'>
                    <div className='flex flex-col sm:flex-row gap-3 items-center justify-between text-sm'>
                        <div className="flex flex-row gap-2 h-fit items-center">
                            <span className='text-neutral-600'>Filtros:</span>
                            <input
                                id="incidentes"
                                name="incidentes"
                                type="checkbox"
                                aria-describedby="incidentes"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="incidentes" className="font-medium text-gray-900 text-sm leading-6">
                                Incidentes
                            </label>
                            <input
                                id="Mantenimientos"
                                name="Mantenimientos"
                                type="checkbox"
                                aria-describedby="Mantenimientos"
                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="Mantenimientos" className="font-medium text-gray-900 text-sm leading-6">
                                Mantenimientos
                            </label>

                        </div>
                        <div className='flex flex-col sm:flex-row gap-2 items-center'>
                            <span className='text-neutral-600'>Servicio:</span>
                            <ComboBox />
                            <MonthSelector />
                        </div>
                    </div>
                    <div>
                        <DateDivider date="20 de octubre, 2024" />
                        <IncidentEvent
                            title="Interrupción del servicio de cesiones"
                            description="Problemas al enviar y recibir cesiones en la plataforma por un incidente en el Servicio de Impuestos Internos."
                            icon={<ExclamationTriangleIcon width={24} className="text-yellow-500" />}
                            duration="1 hora 15 minutos"
                            incidentTime="10:45 AM"
                            logo="./img/Logo-SII.svg"
                        />
                        <DateDivider date="15 de octubre, 2024" />
                        <IncidentEvent
                            title="Mantenimiento programado en plataforma"
                            description="Este mantenimiento es necesario para mejorar el rendimiento y la seguridad de nuestros servicios."
                            icon={<WrenchIcon width={24} className="text-indigo-500" />}
                            duration="1 hora 15 minutos"
                            incidentTime="10:45 AM"
                            logo="./img/Logo-Web.svg"
                        />
                        <DateDivider date="05 de septiembre, 2024" />



                        <IncidentEvent
                            title=" Aenean vulputate eleifend tellus. "
                            description="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus."
                            icon={<ExclamationTriangleIcon width={24} className="text-yellow-500" />}
                            duration="1 hora 15 minutos"
                            incidentTime="10:45 AM"
                            logo="./img/Logo-TGR.svg"
                        /> <IncidentEvent
                            title="viverra quis, feugiat a tellus. Phasellus viverra nulla ut metus varius laoreet Quisque rutrum."
                            description="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus."
                            icon={<ExclamationTriangleIcon width={24} className="text-yellow-500" />}
                            duration="1 hora 15 minutos"
                            incidentTime="10:45 AM"
                            logo="./img/Logo-AWS.svg"
                        /> <IncidentEvent
                            title=" Nam quam nunc blandit vel"
                            description="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus."
                            icon={<ExclamationTriangleIcon width={24} className="text-yellow-500" />}
                            duration="1 hora 15 minutos"
                            incidentTime="10:45 AM"
                            logo="./img/Logo-PGC.svg"
                        />
                        <DateDivider date="12 de agosto, 2024" />
                        <IncidentEvent
                            title=" Sed consequat leo eget bibendum sodales"
                            description="Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus."
                            icon={<ExclamationTriangleIcon width={24} className="text-yellow-500" />}
                            duration="1 hora 15 minutos"
                            incidentTime="10:45 AM"
                            logo="./img/Logo-SII.svg"
                        />

                    </div>


                </div>
            </div>
        </div >
    )
}
