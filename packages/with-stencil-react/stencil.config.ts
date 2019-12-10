import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'with-stencil-react',
  devServer: {
    port: 3006,
    openBrowser: false,
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
