import React from 'react';

type ServiceStatusProps = {
  name: string;
  status: string;
  icon: React.ReactNode;
  image: string;
};

const ServiceStatus: React.FC<ServiceStatusProps> = ({ name, status, icon, image }) => {
  return (
    <div className='flex flex-row w-full justify-between align-middle h-fit p-3 borders border-neutral-300 '>
      <div className='flex flex-row gap-3 justify-start items-center'>
        <img src={image} width={80} alt="logo servicio" className='p-2' />
        <div className='bg-white pl-4 flex flex-col gap-1 text-md'>
          <p className="font-medium text-neutral-900">{name}</p>
          <p className="text-gray-500">{status}</p>
        </div>
      </div>
      {icon}
    </div>
  );
};

export default ServiceStatus;
