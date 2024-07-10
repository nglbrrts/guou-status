import React from 'react';
import ServiceStatus from './ServiceStatus';
import { CheckCircleIcon, WrenchIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

const DatabaseStatus: React.FC = () => {
  const statuses = [
    { status: "Funcionando", icon: <CheckCircleIcon width={24} className='text-emerald-500' /> },
    { status: "Mantenimiento", icon: <WrenchIcon width={24} className='text-indigo-500' /> },
    { status: "Incidente", icon: <ExclamationTriangleIcon width={24} className='text-yellow-500' /> },
  ];

  // Selecciona un estado para demostrar (puedes cambiar esta lógica según tus necesidades)
  const currentStatus = statuses[1];

  return <ServiceStatus name="Base de Datos" status={currentStatus.status} icon={currentStatus.icon} />;
};

export default DatabaseStatus;