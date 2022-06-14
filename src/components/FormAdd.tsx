import { ChangeEvent, useState } from "react";

type Props = {
    onData: (inputName: string) => void;
}

export const FormAdd = ({ onData }: Props) => {

    const [input, setInput] = useState('');

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        
    }
    const handleClick = () => {
        if(input) {
            onData(input)
            setInput('');
        }
    }

    return (
        <div>
            <input className="border-2" type="text" value={input} onChange={handleInput} />
            
            <button className="p-1" onClick={handleClick}>Adicionar</button>
        </div>
    );
}