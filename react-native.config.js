module.exports = {
  dependencies: {
    // 1) skip Reanimated’s Android native integration
    'react-native-reanimated': {
      platforms: {
        android: null,
      },
    },
    // 2) skip Vision Camera Face Detector’s Android native code
    'vision-camera-face-detector': {
      platforms: {
        android: null,
      },
    },
  },
  project: {
    ios: {},
    android: {},
  },
  assets: ['./assets/fonts'],
};
