/* 웹팩 설정 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',    // 배포 시에는 production
    devtool: 'eval',        // 배포 시에는 hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts']  // 확장자 설정
    },

    /*
        client.tsx가 엔트리 포인트.
        모듈들 간의 의존성 그래프의 시작점이다.
        이를 통해 웹팩은 필요한 모듈들을 로딩하고 하나로 묶는다.
    */
    entry: {
        app: './client'     
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'    // 해당 바벨 로더로 문법 변환을 하겠다.
        }]
    },

    plugins: [

    ],

    /*
        엔트리에 설정한 자바스크립트 파일을 시작으로 
        의존되어 있는 모든 모듈을 하나로 묶는다.
        번들된 결과물을 처리할 위치는 output에 기록한다.

        npx webpack 명령어로
        현 위치의 dist 폴더 내의 app.js에 결과물이 저장된다.
    */
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    }
}