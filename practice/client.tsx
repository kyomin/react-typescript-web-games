import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// 컴포넌트 import
import NumberBaseball from './NumberBaseball';

const Hot = hot(NumberBaseball);     // hoc(High Order Component)

ReactDOM.render(<NumberBaseball />, document.querySelector('#root'));