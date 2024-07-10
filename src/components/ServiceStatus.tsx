import React from 'react';

type ServiceStatusProps = {
  name: string;
  status: string;
  icon: React.ReactNode;
};

const ServiceStatus: React.FC<ServiceStatusProps> = ({ name, status, icon }) => {
  return (
    <div className='flex flex-row w-full justify-between align-middle h-fit'>
      <div className='bg-white p-4 flex flex-col gap-1 text-sm'>
        <p className="font-medium text-neutral-900">{name}</p>
        <p className="text-gray-500">{status}</p>
      </div>
      {icon}
    </div>
  );
};

export default ServiceStatus;
