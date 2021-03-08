/* 
    이를 import 함으로써, 함수 내에서 JSX 문법을 사용할 수 있다.
*/
import * as React from 'react';     
import { useState, useRef } from 'react';

// <> === React.Fragment
const GuGuDan = () => {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);     // useRef는 제너릭 가능

    // e는 HTMLFormElement 태그의 FormEvent에서 일어나는 이벤트임을 명시한다.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // HTMLInputElement라는 제너릭을 사용해 선언했으므로, 타입 추론이 가능하다.
        const input = inputEl.current;

        if(parseInt(value) === first * second) {    // 정답 맞췄으면
            setResult('정답');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');

            // input의 타입은 HTMLInputElement | null이므로,
            // input element를 가리킬 때에만 해당 함수를 호출한다.
            if(input) {
                input.focus();
            }
        } else {
            setResult('땡');
            setValue('');

            if(input) {
                input.focus();
            }
        }
    }

    return (
        <>
            <div>{first} 곱하기 {second}는?</div>
            <form onSubmit={handleSubmit}> 
                <input
                    ref={inputEl}
                    type="number"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <div>{result}</div>
        </>
    );
}

export default GuGuDan;