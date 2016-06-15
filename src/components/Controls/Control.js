import React, { Component } from 'react';
import { observer } from 'mobx-react';

import providers from './providers';

const Control = observer((props, context) => {
    const { config, path } = props;
    console.log(`rendering ${path}`);

    if (providers[config.type]) {
        const delegate = providers[config.type];
        const methods = {
            formGet: context.formGet,
            formSet: context.formSet
        };

        return delegate({ ...props, ...methods }, context);
    }

    return null;
});

Control.contextTypes = {
    formGet: React.PropTypes.func,
    formSet: React.PropTypes.func
};

export default Control;
