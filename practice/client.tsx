import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// 컴포넌트 import
import WordRelay from './WordRelay';

const Hot = hot(WordRelay);     // hoc(High Order Component)

ReactDOM.render(<WordRelay />, document.querySelector('#root'));