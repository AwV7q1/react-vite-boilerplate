import type { Preview } from '@storybook/react';

import '../src/style/global.scss'; // nếu bạn muốn import global style

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
