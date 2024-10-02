import React, { createContext, useContext, useState } from 'react';
import {
  ToasterProps,
  ToasterProviderProps,
  ToasterContextType,
} from './toaster.types';
import Toaster from './Toaster';
import { ToasterStackStyled } from './toaster.styles';

const ToasterContext = createContext<ToasterContextType | undefined>(undefined);

export const ToasterProvider: React.FC<ToasterProviderProps> = ({
  children,
}: ToasterProviderProps) => {
  const [toasters, setToasters] = useState<ToasterProps[]>([]);

  const addToaster = (toaster: ToasterProps) => {
    setToasters((prev: ToasterProps[]) => {
      const newToasters = [...prev, toaster];
      if (newToasters.length > 3) {
        newToasters.shift();
      }
      return newToasters;
    });
  };

  const removeToaster = (id: string) => {
    setToasters((prev: ToasterProps[]) =>
      prev.filter((toaster: ToasterProps) => toaster.id !== id),
    );
  };

  return (
    <ToasterContext.Provider value={{ addToaster }}>
      {children}
      <ToasterStackStyled position={toasters[0]?.position || 'top-right'}>
        {toasters.map((toaster: ToasterProps) =>
          toaster.id ? (
            <Toaster
              key={toaster.id}
              {...toaster}
              onClose={() => removeToaster(toaster.id!)}
            />
          ) : null,
        )}
      </ToasterStackStyled>
    </ToasterContext.Provider>
  );
};

export const useToaster = (): ToasterContextType => {
  const context = useContext(ToasterContext);
  if (!context) {
    throw new Error('useToaster must be used within a ToasterProvider');
  }
  return context;
};
