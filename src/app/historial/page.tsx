"use client"
import Head from 'next/head';
import Header from '@/components/Header'
import Link from 'next/link';
import MonthSelector from '@/components/MonthSelector';


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
                <title>Guou Status</title>
                <meta name="description" content="Estado de los servicios de Guou Finance" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className='w-full h-full bg-white flex flex-col gap-7'>
                <div className='w-full max-w-5xl mx-auto h-fit flex flex-col gap-3 justify-center px-4 py-12 dm-sans text-center'>

                    <h1 className='text-3xl text-neutral-900 font-semibold'>Historial de incidentes</h1>
                    <p className='leading-6'>A continuación encontrarás el listado de incidentes en nuestros servicios por fecha y hora. Si tienes un problema que no aparece aquí, comunícate con el <Link href="mailto:centrodeayuda@guou.cl" className=" text-indigo-500 hover:text-indigo-300 transition-all">equipo de asistencia</Link>. También puedes consultar nuestra sección de <Link href="https://guou.cl/preguntas-frecuentes/" target="_blank" className=" text-indigo-500 hover:text-indigo-300 transition-all">preguntas frecuentes</Link></p>
                </div>
                <div className='w-full max-w-5xl mx-auto'>
                    <MonthSelector />
                    <table className="min-w-full divide-y divide-neutral-300 ">
                        <thead className='bg-neutral-100'>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-neutral-900 sm:pl-0">
                                    Servicio
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900">
                                    Fecha
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900">
                                    Hora
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900">
                                    Estado
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-neutral-900">
                                    Duración
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200">
                            {incidentes.map((incidente) => (
                                <tr key={incidente.servicio}>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-900 font-medium">{incidente.servicio}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">{incidente.fecha}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">{incidente.hora}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">{incidente.estado}</td>
                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-neutral-500">{incidente.duración}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>


                </div>
            </div>
        </div >
    )
}
