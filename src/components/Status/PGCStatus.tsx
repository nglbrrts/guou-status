import React from 'react';
import ServiceStatus from '../ServiceStatus';
import { CheckCircleIcon, WrenchIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

const PGCStatus: React.FC = () => {
  const statuses = [
    { status: "Funcionando", icon: <CheckCircleIcon width={32} className='text-emerald-500' /> },
    { status: "Mantenimiento", icon: <WrenchIcon width={32} className='text-indigo-500' /> },
    { status: "Incidente", icon: <ExclamationTriangleIcon width={32} className='text-yellow-500' /> },
  ];

  const currentStatus = statuses[0];

  return <ServiceStatus name="Backoffice" status={currentStatus.status} icon={currentStatus.icon} image='/img/Logo-PGC.svg' />;
};

export default PGCStatus;
