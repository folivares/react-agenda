import resolve from "@rollup/plugin-node-resolve";
import babel from '@rollup/plugin-babel';
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import scss from 'rollup-plugin-scss'

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.js",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: [ '.mjs', '.js', '.jsx', '.json' ]
      }),
      babel({
        babelHelpers: "bundled",
        presets: [
          ["@babel/preset-react", { runtime: "automatic" }],
        ]
      }),
      commonjs(),
      scss({
        outputStyle: "compressed"
      }),
      terser()
    ],
  }
];