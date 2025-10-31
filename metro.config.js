const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);

const config = {
    resolver: {
        assetExts: [
            // Keep default extensions
            ...defaultConfig.resolver.assetExts,
            // Add your custom ones
            'bin',
            'png',
            'jpg',
            'jpeg',
            'gif',
            'webp',
            'svg',
            'ttf',
            'otf',
            'woff',
            'woff2',
        ],
    },
};

module.exports = mergeConfig(defaultConfig, config);
