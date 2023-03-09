import pkg from './package.json' assert { type: 'json' };
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import typescript from 'rollup-plugin-ts';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

const BUNDLE_DIR = 'bundle';
const PACKAGE_JSON = 'package.json';

export default {
  input: './src/index.ts',
  output: [
    {
      file: `${BUNDLE_DIR}/${pkg.main}`,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: `${BUNDLE_DIR}/${pkg.module}`,
      format: 'es',
      sourcemap: true
    }
  ],
  plugins: [
    external(),
    nodeResolve(),
    commonjs(),
    postcss(),
    typescript({ tsconfig: './tsconfig.json' }),
    terser(),
    copy({
      targets: [{ src: PACKAGE_JSON, dest: BUNDLE_DIR }]
    })
  ]
};
