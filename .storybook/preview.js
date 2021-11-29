export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'dark',
        values: [
            {
                name: 'dark',
                value: '#2a2a2b',
            },
        ]
    },
}
import "../src/styles/index.less"