import React, { Component } from 'react';
import { observer } from 'mobx-react';
import map from 'lodash/map';

import Control from './Control';

@observer
class Controls extends Component {
    renderControl = (control, controlId) => {
        const { path } = this.props;

        return <Control config={control} path={`${path}.${controlId}`} key={controlId} />
    };

    render() {
        const { controls } = this.props;

        return (
            <div className="controls">
                { map(controls, this.renderControl) }
            </div>
        );
    }
}

Controls.propTypes = {};
Controls.defaultProps = {};

export default Controls;
