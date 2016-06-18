import React, { Component } from 'react';
import { observer } from 'mobx-react';

@observer
class Text extends Component {
    render() {
        const { config, path, formGet, formSet } = this.props;

        return (
            <div>
                <label htmlFor={path}>{config.label}</label>
                <input
                    type="text"
                    id={path}
                    value={formGet(path)}
                    onChange={e => formSet(path, e.target.value)}
                />
            </div>
        );
    }
}

Text.propTypes = {};
Text.defaultProps = {};

export default Text;
