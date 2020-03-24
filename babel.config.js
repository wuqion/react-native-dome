module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  // plugins: [
  //   ["module-resolver", {
  //     "alias": {
  //       "^react-native$": "react-native-web"
  //     }
  //   }]
  // ]
};

// module.exports = function(api) {
//   api.cache(true);
//   return {
//     "presets": [
//       "module:metro-react-native-babel-preset",
//       "@babel/preset-flow"
//     ],
//     "plugins": [
//       [
//         "@babel/plugin-proposal-decorators",
//         {
//           "legacy": true
//         }
//       ]
//     ]
//   };
// };