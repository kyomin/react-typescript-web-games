import * as React from 'react';
import { useRef, useState, useCallback } from 'react';
import Try from './Try';
import { TryInfo } from './types';

const getNumbers = () => {
    const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const array = [];

    // 랜덤으로 숫자 4개 중복 없이 뽑기
    for(let i=0; i<4; i++) {
        const chosen = candidates.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }

    return array;
}

/* 
    숫자만 맞으면 ball.
    숫자와 자릿수까지 맞으면 strike.
    기회는 10번.
    10번 안에 못 맞추면 패배.
*/
const NumberBaseball = () => {
    const [answer, setAnswer] = useState(getNumbers());
    const [value, setValue] = useState('');
    const [tries, setTries] = useState<TryInfo[]>([]);      // 어떤 type의 배열인지 명시해줘야 한다.
    const inputEl = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        const input = inputEl.current;

        if(value === answer.join('')) {
            /* 
                함수형 업데이트 방식이다.
                새로운 값을 넣어주는 것이 아닌,
                기존 값을 업데이트 하는 함수를 넣는 방식이다.
            */
            setTries((t) => ([
                ...t,
                {
                    try: value,
                    result: '홈런!'
                }
            ]));

            console.log('tries: ', tries);

            alert('홈런입니다!\n 게임을 다시 실행합니다.');
            setValue('');
            setAnswer(getNumbers());
            setTries([]);

            if(input) {
                input.focus();
            }
        } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;

            if(tries.length >= 9) {
                alert(`10번 넘게 틀려서 실패!\n 답은 ${answer.join(',')}였습니다!`);  // state set은 비동기
                alert('게임을 다시 시작합니다.');
                setValue('');
                setAnswer(getNumbers());
                setTries([]);

                if(input) {
                    input.focus();
                }
            } else {
                console.log('답은', answer.join(''));

                for(let i=0; i<4; i++) {
                    if(answerArray[i] === answer[i]) {
                        console.log('strike', answerArray[i], answer[i]);
                        strike += 1;
                    } else if(answer.includes(answerArray[i])) {
                        console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
                        ball += 1;
                    }
                }

                setTries((t) => ([
                    ...t,
                    {
                        try: value,
                        result: `${strike} 스트라이크, ${ball} 볼입니다.`
                    }
                ]));

                setValue('');

                if(input) {
                    input.focus();
                }
            }
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>4자리 숫자를 중복 없이 입력하세요.</h1>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputEl}
                    maxLength={4}
                    value={value}
                    onChange={handleChange}
                />
                <button>입력</button>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i) => {
                    return (
                        <Try 
                            key={`${i + 1}차 시도 : ${v.try}`}
                            tryInfo={v}
                        />
                    );
                })}
            </ul>
        </>
    );
}

export default NumberBaseball;