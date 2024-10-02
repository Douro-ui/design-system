import { useState, useCallback } from 'react';
import { ToasterProps, UseToasterQueueResult } from '../toaster.types';

export const useToasterQueue = (): UseToasterQueueResult => {
  const [toasters, setToasters] = useState<ToasterProps[]>([]);

  const addToaster = useCallback((toaster: ToasterProps) => {
    setToasters((prev: ToasterProps[]) => [...prev, toaster]);
  }, []);

  const removeToaster = useCallback((id: string) => {
    setToasters((prev: ToasterProps[]) =>
      prev.filter((toaster: ToasterProps) => toaster.id !== id),
    );
  }, []);

  return { toasters, addToaster, removeToaster };
};
