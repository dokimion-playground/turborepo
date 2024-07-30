import React, { useState } from 'react';
import { useTimeout } from '../../hooks';
import { ToastCheckSVG, ToastCloseSVG } from '../Icon';
import { Text } from '../Text';
import * as S from './style';

export type ToastType = 'default' | 'success' | 'error' | 'warning';

export interface ToastProps {
  id: string;
  message: string;
  type?: ToastType;
  duration?: number;
  onDone?: VoidFunction;
}

export const Toast = ({
  message = '',
  type = 'default',
  duration = 3000,
  onDone,
  ...props
}: ToastProps) => {
  const [show, setShow] = useState(true);

  useTimeout(() => {
    setShow(false);
    setTimeout(() => {
      onDone?.();
    }, 1000);
  }, duration);

  return (
    <S.ToastWrapper type={type} {...props}>
      {type === 'success' && <ToastCheckSVG />}
      {type === 'error' && <ToastCloseSVG />}
      <Text as="p" variant="BODY3_S" color="white">
        {message}
      </Text>
    </S.ToastWrapper>
  );
};