import serializeTabs from './serializeTabs';
import expect from 'expect';

const schema = {
    tab1: {
        controls: {
            title: {
                type: 'text',
                default: 'default title'
            }
        }
    }
};

describe('serializeTabs function', () => {
    it('should run generate data if nothing given', () => {
        const data = serializeTabs(schema);
        expect(data.tab1.title).toBe('default title')
    });

    it('should run merge if something is given', () => {
        const data = serializeTabs(schema, {
            tab1: {
                title: 'this is not default',
                description: 'asdf'
            }
        });

        expect(data.tab1.title).toBe('this is not default')
    });
});
