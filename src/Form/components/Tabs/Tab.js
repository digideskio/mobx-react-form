import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Controls from '../Controls';

@observer
class Tab extends Component {
    render() {
        const { controls, tabId } = this.props;

        return (
            <div className="tab">
                <Controls controls={controls} path={tabId} />
            </div>
        );
    }
}

Tab.propTypes = {};
Tab.defaultProps = {};

export default Tab;
