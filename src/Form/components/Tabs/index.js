import React, { Component } from 'react';
import map from 'lodash/map';
import { observer } from 'mobx-react';

import Tab from './Tab';

@observer
class Tabs extends Component {
    renderTab(tab, tabId) {
        return <Tab controls={tab.controls} tabId={tabId} key={tabId} />
    }

    render() {
        const { tabs } = this.props;

        return (
            <div name="tabs">
                {map(tabs, this.renderTab)}
            </div>
        );
    }
}

export default Tabs;
