import { createDevTools } from '@redux-devtools/core';
import LogMonitor from '@redux-devtools/log-monitor';
import DockMonitor from '@redux-devtools/dock-monitor';

function DevTools() {
    return (
        <DockMonitor
            toggleVisibilityKey='shift-l'
            changePositionKey='shift-k'
            defaultIsVisible={false}
        >
            <LogMonitor theme='tomorrow' />
        </DockMonitor>
    );
}

const StoreDevTools = createDevTools(DevTools());

export default StoreDevTools;
