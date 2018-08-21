import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default [
  {
    input: './node_modules/fela-plugin-fallback-value/es/index.js',
    output: {
      file: './fela-plugin-fallback-value.js',
      format: 'es',
    },
    plugins: [
      resolve(),
      commonjs(),
    ],
  },
];
