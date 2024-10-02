import React from 'react';
import { Toaster } from './Toaster';
import { ToasterProps, ToasterStackProps } from './toaster.types';

export const ToasterStack: React.FC<ToasterStackProps> = ({
  toasters,
  removeToaster,
}: ToasterStackProps) => {
  return (
    <div>
      {toasters.map(
        (toaster: ToasterProps) =>
          toaster.id && (
            <Toaster
              key={toaster.id}
              {...toaster}
              isInStack={true}
              onClose={() => removeToaster(toaster.id!)}
            />
          ),
      )}
    </div>
  );
};
