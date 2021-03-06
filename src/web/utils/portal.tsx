import React from 'react';
import { buildPortal, DefaultEventEmitter } from '@shared/components/portal';
import styled from 'styled-components';

const eventEmitter = new DefaultEventEmitter();

const PortalView = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 10;
`;

const { PortalHost, PortalRender, add, remove } = buildPortal({
  hostName: 'default',
  eventEmitter,
  renderManagerView: (children) => <PortalView>{children}</PortalView>,
});

export { PortalHost, PortalRender, add as PortalAdd, remove as PortalRemove };
