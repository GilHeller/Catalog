const path = require("path");

const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        clean: true
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        // historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ],
                // type: 'text/css' 
            },
            {
                test: /\.(gif|png|jpe?g)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'src/assets/images/'
                    }
                  }
                ]
              },
            // {
            //     test: /\.(png|jpeg|jpg)$/,
            //     type: 'asset/resource'
            // },
            // {
            //     test: /\.m?js$/,
            //     resourceQuery: { not: [/raw/] },

            // },
            // {
            //     test: /\.html/,
            //     type: 'asset/resource',
            //     generator: {
            //         filename: 'static/[hash][ext][query]'
            //     }
            // }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            title: "Webpack App",
            filename: "index.html",
            template: "src/template.html"
        })
    ]
}