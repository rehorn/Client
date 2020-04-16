import React from 'react';
import { TMemo } from '@shared/components/TMemo';
import { XMLBuilderContext } from '../XMLBuilder';

export const LayoutStateContext = React.createContext<XMLBuilderContext>(null);

export const LayoutStateContextProvider: React.FC<{
  state: XMLBuilderContext;
}> = TMemo((props) => {
  return (
    <LayoutStateContext.Provider value={props.state}>
      {props.children}
    </LayoutStateContext.Provider>
  );
});
LayoutStateContextProvider.displayName = 'LayoutStateContextProvider';
