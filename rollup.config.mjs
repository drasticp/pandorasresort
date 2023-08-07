import resolve from 'rollup-plugin-node-resolve';
// The main JavaScript bundle for modern browsers that support
// JavaScript modules and other ES2015+ features.
const config = {
    input: 'scripts/monarch.js',
    output: {
        file: 'scripts/bundle.js',
        format: 'iife',
        sourcemap: 'inline'
    },
    plugins: [
        resolve()
    ]
};

export default config;