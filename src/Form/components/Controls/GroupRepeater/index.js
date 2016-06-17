import React, { Component } from 'react';
import { observer } from 'mobx-react';

import Group from './Group';

@observer
class Groups extends Component {
    renderGroup = (group, groupIndex) => {
        const { path, config } = this.props;

        return <Group controls={config.schema} path={`${path}.${groupIndex}`} />
    };

    render() {
        const { path, formGet } = this.props;
        const groups = formGet(path);

        return (
            <div name="groups">
                {groups.map(this.renderGroup)}
            </div>
        );
    }
}

export default Groups;
