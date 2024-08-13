import Header from '@/components/Header'
import Head from 'next/head';
import { CheckCircleIcon, WrenchIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import StatusHeader from '@/components/StatusHeader';
import PlatformStatus from '@/components/Status/PlatformStatus';
import SIIStatus from '@/components/Status/SIIStatus';
import AWSStatus from '@/components/Status/AWSStatus';
import TGRStatus from '@/components/Status/TGRStatus';
import PGCStatus from '@/components/Status/PGCStatus';
import WEBStatus from '@/components/Status/WEBStatus';


export default function Home() {
  return (
    <main>
      <Head>
        <title>Guou Status</title>
        <meta name="description" content="Estado de los servicios de Guou Finance" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className='w-full h-full bg-white flex flex-col gap-7 dm-sans'>
        <StatusHeader type="active" />
        <div className='w-full p-4 max-w-5xl mx-auto'>
          <div className='flex flex-col sm:flex-row p-2 justify-between align-middle w-full bg-neutral-100'>
            <div className='text-left font-semibold text-base p-2'>
              <p>Estado actual por servicio</p>
            </div>
            <div className='flex flex-row gap-2 items-center w-fit text-sm'>
              <CheckCircleIcon width={24} className='text-emerald-500' />
              <p className='h-fit'>Funcionando</p>
              <WrenchIcon width={24} className='text-indigo-500' />
              <p className='h-fit'>Mantenimiento</p>
              <ExclamationTriangleIcon width={24} className='text-yellow-500' />
              <p className='h-fit'>Incidente</p>
            </div>
          </div>
          <div className=' h-fit grid grid-cols-1 sm:grid-cols-2  sm:divide-x divide-solid divide-neutral-200 border border-solid border-neutral-200' >
            <div className='divide-y divide-solid divide-neutral-200'>
              <PlatformStatus />
              <AWSStatus />
              <SIIStatus />
            </div>
            <div className='border-t border-solid border-neutral-200 sm:hidden w-full'></div>
            <div className='divide-y divide-solid divide-neutral-200'>
              <TGRStatus />
              <PGCStatus />
              <WEBStatus />
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}