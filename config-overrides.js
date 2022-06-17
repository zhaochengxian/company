const { override, addWebpackModuleRule } = require('customize-cra')
const path = require('path')

module.exports = {
    webpack: override(
        addWebpackModuleRule({
            test: [/\.css$/, /\.scss$/],
            use: ['style-loader', 'css-loader', 'sass-loader', {
                loader: 'sass-resources-loader',
                options: {
                    resources: path.resolve(__dirname, './src/global.scss')
                },
            }],


        })
    ),

}
