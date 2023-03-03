import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-ts';
import terser from '@rollup/plugin-terser';
import external from 'rollup-plugin-peer-deps-external';
import copy from 'rollup-plugin-copy';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pkg = require('./package.json');

const BUNDLE_DIR = 'bundle';
const PACKAGE_JSON = 'package.json';

export default [
  {
    input: 'src/index.ts',
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
      typescript({ tsconfig: './tsconfig.build.json' }),
      terser(),
      copy({
        targets: [{ src: PACKAGE_JSON, dest: BUNDLE_DIR }]
      })
    ]
  }
];
