import expect from 'expect';
import serializeControls from './serializeControls';

import { controls } from './mock.data';

describe('serializeControls', () => {
    it('should return default value if nothing is given', () => {
        const d = serializeControls(controls);

        expect(d.title).toEqual(controls.title.default);
        expect(d.description).toEqual(controls.description.default);
        expect(d.slides).toEqual(controls.slides.default);
    });

    it('should fill in the blanks of simple controls', () => {
        const d = serializeControls(controls, {
            title: 'my unique title',
            description: 'my unique description'
        });

        expect(d.title).toEqual('my unique title');
        expect(d.description).toEqual('my unique description');
    });

    it('should fill in the blanks of complex controls', () => {
        const d = serializeControls(controls, {
            slides: [{
                title: 'my unique title'
            }, {
                description: 'my unique description'
            }]
        });

        expect(d.slides[0].title).toEqual('my unique title');
        expect(d.slides[1].description).toEqual('my unique description');
    });
});
