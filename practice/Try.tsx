import * as React from 'react';
import { FunctionComponent } from 'react';
import { TryInfo } from './types';

// 부모로부터 받는 props의 타입을 지정한다.
const Try: FunctionComponent<{ tryInfo: TryInfo }> = ({ tryInfo }) => {
    return (
        <li>
            <div>{tryInfo.try}</div>
            <div>{tryInfo.result}</div>
        </li>
    );
}

export default Try;