import { Stage as PixiStage } from '@pixi/react';
import { ReactReduxContext } from 'react-redux';
import React, { ReactNode, ReactElement } from 'react';

type ContextBridgeProps = {
  children: ReactNode;
  Context: React.Context<any>;
  render: (children: ReactNode) => ReactElement;
};

export const ContextBridge: React.FC<ContextBridgeProps> = ({ children, Context, render }) => {
  return (
    <Context.Consumer>
      {(value) => render(<Context.Provider value={value}>{children}</Context.Provider>)}
    </Context.Consumer>
  );
};

type StageProps = {
  children: React.ReactNode;
} & React.ComponentProps<typeof PixiStage>;

export const Stage: React.FC<StageProps> = ({ children, ...props }) => {
  return (
    <ContextBridge
      Context={ReactReduxContext}
      render={(children) => <PixiStage {...props}>{children}</PixiStage>}
    >
      {children}
    </ContextBridge>
  );
};
