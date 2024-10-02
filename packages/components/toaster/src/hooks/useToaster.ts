import { useState, useEffect, useRef } from 'react';
import { UseToasterParams, UseToasterResult } from '../toaster.types';

export const useToaster = ({
  duration = 3000,
  onClose,
}: UseToasterParams): UseToasterResult => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(100);
  const [isHovered, setIsHovered] = useState(false);

  const startTimeRef = useRef<number | null>(null);
  const elapsedTimeRef = useRef<number>(0);
  const timerRef = useRef<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const closeToaster = () => {
    setVisible(false);
    if (onClose) {
      onClose();
    }
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    startTimer();
  };

  const startTimer = () => {
    if (duration <= 0) return;

    const elapsedTime = elapsedTimeRef.current;
    const remainingTime = duration - elapsedTime;

    intervalRef.current = window.setInterval(() => {
      setProgress((prev: number) =>
        Math.max(prev - 100 / (remainingTime / 100), 0),
      );
    }, 100);

    timerRef.current = window.setTimeout(() => {
      setVisible(false);
      clearInterval(intervalRef.current!);
      if (onClose) {
        onClose();
      }
    }, remainingTime);
  };

  useEffect(() => {
    if (duration > 0) {
      startTimeRef.current = Date.now();
      startTimer();

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }

    if (duration === 0) {
      setVisible(true);
      setProgress(100);
    }
  }, [duration]);

  useEffect(() => {
    if (isHovered && startTimeRef.current !== null) {
      elapsedTimeRef.current += Date.now() - startTimeRef.current;
      startTimeRef.current = Date.now();
    }
  }, [isHovered]);

  return {
    visible,
    progress,
    closeToaster,
    handleMouseEnter,
    handleMouseLeave,
  };
};
