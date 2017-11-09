module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'FormForComponentHelpers',
      externals: {
        react: 'React'
      }
    }
  }
};
