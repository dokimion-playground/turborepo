import React, { ReactElement, useState } from 'react';

export default function useFunnel<StepType>(defaultStep: StepType) {
  const [step, setStep] = useState(defaultStep);

  function Step({ children }: { children: React.ReactNode; name: StepType }) {
    return children;
  }

  function Funnel({ children }: { children: React.ReactNode }) {
    const childrenArray = React.Children.toArray(children) as ReactElement[];
    const targetStep = childrenArray.find(
      (childStep: ReactElement) => childStep.props.name === step,
    );
    return targetStep || null;
  }

  Funnel.Step = Step;

  return {
    Funnel,
    step,
    setStep,
  };
}
