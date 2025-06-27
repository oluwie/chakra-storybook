import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    // "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/preset-create-react-app",
    // "@storybook/addon-docs",
    // "@storybook/addon-controls",
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: [
    "../public"
  ],
  viteFinal: async (config, { configType }) => {
    if (configType === 'PRODUCTION') {
      // Set the base path for GitHub Pages
      config.base = process.env.NODE_ENV === 'production' 
        ? '/your-repository-name/' // Replace with your actual repo name
        : '/';
    }
    return config;
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      savePropValueAsString: true,
      // This is key - include Chakra UI types
      propFilter: (prop, component) => {
        if (prop.parent) {
          // Include props from @chakra-ui packages
          if (prop.parent.fileName.includes('@chakra-ui')) {
            return true;
          }
          // Include props from styled-system (used by Chakra)
          if (prop.parent.fileName.includes('styled-system')) {
            return true;
          }
          // Exclude other node_modules
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    }
  }
};
export default config;