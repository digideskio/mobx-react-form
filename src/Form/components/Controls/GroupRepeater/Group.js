import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Controls from '../index';

@observer
class Group extends Component {
    render() {
        const { controls, path } = this.props;

        return (
            <div className="group">
                <Controls controls={controls} path={path} />
            </div>
        );
    }
}

Group.propTypes = {};
Group.defaultProps = {};

export default Group;
