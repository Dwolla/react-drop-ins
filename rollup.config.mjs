import pkg from './package.json' with { type: 'json' };
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import external from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: `${pkg.main}`,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: `${pkg.module}`,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    json(),
    terser()
  ]
};
