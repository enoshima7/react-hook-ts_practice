import React, { useState, useRef } from 'react';
interface Props {
  text: string;
  ok?: string;
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
interface TextNode {
  text: string;
}
export const TextField: React.FC<Props> = ({ text, changeHandler }) => {
  const [count, setCount] = useState<TextNode>({ text: 'duan' });
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  return (
    <div ref={divRef}>
      {count}
      <input ref={inputRef} type='text' onChange={changeHandler} />
    </div>
  );
};
