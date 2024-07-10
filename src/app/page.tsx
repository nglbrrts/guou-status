import Header from '@/components/Header'
import { CheckCircleIcon, WrenchIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';
import StatusHeader from '@/components/StatusHeader';
import PlatformStatus from '@/components/PlatformStatus';
import DatabaseStatus from '@/components/DatabaseStatus';
import ApiStatus from '@/components/ApiStatus';


export default function Home() {
  return (
    <main>
      <Header />
      <div className='w-full h-full bg-white flex flex-col gap-7'>
        <StatusHeader type="active" />
        <div className='w-full p-4 max-w-5xl mx-auto border border-neutral-600 rounded-xl'>
          <div className='flex flex-row p-2 justify-between align-middle w-full bg-neutral-100'>
            <div className='text-left font-semibold text-base p-2'>
              <p>Estado actual por servicio</p>
            </div>
            {/* <div className='flex flex-row gap-1 align-middle w-fit text-sm'>
              <CheckCircleIcon width={24} className='text-emerald-500' />
              <p className='h-fit p-2'>Sin problemas</p>
              <WrenchIcon width={24} className='text-indigo-500' />
              <p className='h-fit p-2'>En mantenimiento</p>
              <ExclamationTriangleIcon width={24} className='text-yellow-500' />
              <p className='h-fit p-2'>Incidente</p>
            </div> */}
          </div>
          <div className='flex flex-col h-fit' >
            <div className='flex flex-row bg-white border border-neutral-500'>
              <PlatformStatus />
              <ApiStatus />
            </div>
            <div className='flex flex-row'>
              <DatabaseStatus />
              <ApiStatus />
            </div>
          </div>
        </div>
      </div>
    </main >
  );
}