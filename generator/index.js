module.exports = (api, opts, rootOptions) => {
  const utils = require('./utils')(api)

  api.extendPackage({
    dependencies: {
      'view-design': '^4.0.0'
    }
  })

  api.injectImports(utils.getMain(), `import './plugins/iview.js'`)

  api.render({
    './src/plugins/iview.js': './templates/src/plugins/iview.js',
    './src/App.vue': './templates/src/App.vue'
  })

  if (opts.import === 'partial') {
    api.extendPackage({
      devDependencies: {
        'babel-plugin-import': '^1.8.0'
      }
    })
  } else if (opts.customTheme) {
    api.render({
      './src/iview-variables.less': './templates/src/iview-variables.less'
    })
    api.extendPackage({
      devDependencies: {
        'less-loader': '^4.0.6',
        'less': '^2.7.3'
      }
    })
  }

  api.onCreateComplete(() => {
    if (opts.import === 'partial') {
      utils.updateBabelConfig(cfg => {
        const pluginComponent = ["import", {
            "libraryName": "view-design",
            "libraryDirectory": "src/components"
        }]
        cfg.plugins = cfg.plugins || []
        cfg.plugins.push(pluginComponent)
        return cfg
      })
    }
  })
}
