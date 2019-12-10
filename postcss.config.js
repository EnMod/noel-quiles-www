module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      stage: 0,
      features: {
        "custom-properties": { preserve: false },
        "nesting-rules": true
      }
    }
  }
}
