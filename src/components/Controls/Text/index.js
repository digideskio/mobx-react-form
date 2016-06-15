import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import { observer } from 'mobx-react';

@observer
class Text extends Component {
    id = uniqueId('text_');

    render() {
        const { config, path, formGet, formSet } = this.props;

        return (
            <div>
                <label htmlFor={this.id}>{config.label}</label>
                <input
                    type="text"
                    id={this.id}
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
