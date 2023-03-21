import pkg from './package.json' assert { type: 'json' };
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-ts';
import external from 'rollup-plugin-peer-deps-external';

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
    nodeResolve(),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser()
  ]
};
