import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  transformAliasedImportPaths: true,
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
    },
  ],
};
