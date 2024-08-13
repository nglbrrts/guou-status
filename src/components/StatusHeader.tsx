import React from 'react';
import { CheckCircleIcon, WrenchIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid';

type StatusHeaderType = 'active' | 'maintenance' | 'incident';

type StatusHeaderProps = {
    type: StatusHeaderType;
};

const messageMap = {
    active: {
        icon: <CheckCircleIcon width={100} className='text-emerald-500 w-fit mx-auto' />,
        message: 'La plataforma Guou Finance está activa y funcionando',
        details: 'Si tienes problemas para ingresar o necesitas ayuda envía un mensaje a tu ejecutivo o escríbenos a <a href="mailto:centrodeayuda@guou.cl" style="color:#6466F1;">centrodeayuda@guou.cl</a>.',
    },
    maintenance: {
        icon: <WrenchIcon width={100} className='text-indigo-500 w-fit mx-auto' />,
        message: 'Mantenimiento programado',
        details: 'La plataforma estará en mantenimiento desde las 22:00 hasta las 02:00. Por favor, planifica tus actividades en consecuencia.',
    },
    incident: {
        icon: <ExclamationTriangleIcon width={100} className='text-yellow-500 w-fit mx-auto' />,
        message: 'Problemas de conexión',
        details: 'Estamos experimentando problemas con algunos servicios, nuestro equipo está trabajando para solucionarlos lo antes posible. Si necesitas ayuda envía un mensaje a tu ejecutivo o escríbenos a <a href="mailto:centrodeayuda@guou.cl" style="color:#6466F1;">centrodeayuda@guou.cl</a>.',
    },
};

const StatusHeader: React.FC<StatusHeaderProps> = ({ type }) => {
    const { icon, message, details } = messageMap[type];

    return (
        <div className='w-full max-w-5xl mx-auto h-fit flex flex-col gap-3 justify-center p-4 dm-sans text-center'>
            {icon}
            <h1 className='text-3xl text-neutral-900 font-semibold'>{message}</h1>
            <p className='leading-6' dangerouslySetInnerHTML={{ __html: details }} />
        </div>
    );
};

export default StatusHeader;
