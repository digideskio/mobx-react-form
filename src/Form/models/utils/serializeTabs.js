import mapValues from 'lodash/mapValues';
import serializeControls from './serializeControls';

export default function serializeTabs(tabs, data={}) {
    return mapValues(tabs, (tab, tid) => {
        return serializeControls(tab.controls, data[tid]);
    });
}
