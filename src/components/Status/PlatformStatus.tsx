import React from 'react';
import ServiceStatus from '../ServiceStatus';
import { CheckCircleIcon, WrenchIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

const PlatformStatus: React.FC = () => {
  const statuses = [
    { status: "Funcionando", icon: <CheckCircleIcon width={32} className='text-emerald-500' /> },
    { status: "Mantenimiento", icon: <WrenchIcon width={32} className='text-indigo-500' /> },
    { status: "Incidente", icon: <ExclamationTriangleIcon width={32} className='text-yellow-500' /> },
  ];

  const currentStatus = statuses[0];

  return <ServiceStatus name="Plataforma" status={currentStatus.status} icon={currentStatus.icon} image='/img/Logo-Web.svg' />;
};

export default PlatformStatus;