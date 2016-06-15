import React, { Component, PropTypes, cloneElement } from 'react';
import { observer } from 'mobx-react';

@observer
class Provider extends Component {
    getChildContext() {
        const { store } = this.props;
        return { store };
    }

    render() {
        return cloneElement(this.props.children, { store });
    }
}

Provider.propTypes = {
    store: PropTypes.object.isRequired
};

Provider.childContextTypes = {
    store: PropTypes.object
};

export default Provider;
