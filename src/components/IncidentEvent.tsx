import React from 'react';

interface IncidentEventProps {
    title: string;
    description: string;
    icon: JSX.Element;
    duration: string;
    incidentTime: string;
    logo: string;
}

const IncidentEvent: React.FC<IncidentEventProps> = ({
    title,
    description,
    icon,
    duration,
    incidentTime,
    logo,
}) => {
    return (
        <div className="flex items-start p-4 bg-white rounded-xl mb-4 border border-solid border-neutral-200 dm-sans leading-6">
            <div className="mr-4">
                <img src={logo} width={80} alt="plataforma afectada" />
            </div>
            <div className='border flex flex-col gap-2'>
                <div className='flex gap-2 align-middle'>
                    <h3 className="text-lg font-medium">{title}</h3>
                    <span className='text-sm'> {icon}</span>
                </div>
                <p className="text-indigo-500">{description}</p>
                <p className="text-sm text-neutral-500 ">
                    Hora: {incidentTime}
                </p>
                <p className="text-sm text-neutral-500 ">
                    Duración: {duration}
                </p>
            </div>
        </div>
    );
};

export default IncidentEvent;
