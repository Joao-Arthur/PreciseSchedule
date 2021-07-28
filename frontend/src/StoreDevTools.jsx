import { createDevTools } from '@redux-devtools/core';
import LogMonitor from '@redux-devtools/log-monitor';
import DockMonitor from '@redux-devtools/dock-monitor';

const StoreDevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey='shift-l'
        changePositionKey='shift-k'
        defaultIsVisible
    >
        <LogMonitor theme='tomorrow' />
    </DockMonitor>
);

export default StoreDevTools;
