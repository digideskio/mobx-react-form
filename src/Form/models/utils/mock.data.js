const controls = {
    title: { label: 'Title', type: 'text', default: 'default title' },
    description: { label: 'Description', type: 'textarea', default: 'default description' },
    slides: {
        label: 'Slides',
        type: 'group-repeater',
        default: [
            { title: 'default slide1 title', description: 'default slide1 description' }
        ],
        schema: {
            title: { label: 'Title', type: 'text', default: 'default slide title' },
            description: { label: 'Description', type: 'textarea', default: 'default slide description' }
        }
    }
};


const data = {
    tab1: {
        title: 'hello world',
        description: 'this is a revolution',
        slides: [
            { title: 'slide1 title', description: 'slide1 description' },
            { title: 'slide2 title', description: 'slide2 description' }
        ]
    }
};

const tabs = {
    tab1: {
        name: 'tab 1',
        controls
    }
};

export { controls };
