import * as React from 'react';
import { useState, useRef } from 'react';

const WordRelay = () => {
    const [word, setWord] = useState('김교민');
    const [val, setVal] = useState('');
    const [result, setResult] = useState('');
    const inputEl = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const input = inputEl.current;
        
        if(word[word.length-1] === val[0]) {
            setResult('딩동댕');
            setWord(val);
            setVal('');

            if(input) {
                input.focus();
            }
        } else {
            setResult('땡');
            setVal('');

            if(input) {
                input.focus();
            }
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.currentTarget.value);
    };

    return (
        <>
            <div>{word}</div>

            <form onSubmit={handleSubmit}>
                <input 
                    ref={inputEl}
                    value={val}
                    onChange={handleChange}
                />
                <button>입력!</button>
            </form>
            <div>{result}</div>
        </>
    );
}

export default WordRelay;