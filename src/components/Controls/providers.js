import React from 'react';
import Text from './Text';
import Textarea from './Textarea';
import GroupRepeater from './GroupRepeater';

const providers = {
    text(props, context) {
        return <Text {...props} />;
    },

    textarea(props, context) {
        return <Textarea {...props} />;
    },

    'group-repeater': (props, context) => {
        return <GroupRepeater {...props} />;
    }
};

export default providers;
