import { useState, ChangeEvent } from "react";

type Props = {
    onAdd: (title: string, body: string) => void;
}

export const PostForm = ({ onAdd }: Props) => {
    const [addTitleText, setAddTitleText] = useState('');
    const [addBodyText, setBodyText] = useState('');

    const handleAddTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value);
      }
      
      const handleAddBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setBodyText(e.target.value);
      }

      const handleAddClick = () => {
        if(addTitleText && addBodyText) {
            onAdd(addTitleText, addBodyText);
        } else {
            alert('Preencha os campos');
        }
      }

    return (
        <fieldset className="fieldSet">
        <legend>Adicionar Novo Post</legend>

        <input value={addTitleText} onChange={handleAddTitle} className="block border" type="text" placeholder ="Digite um título" />
        
        <textarea className="block border" onChange={handleAddBody} value={addBodyText}></textarea>

        <button className="block border" onClick={handleAddClick}>Adicionar</button>
      </fieldset>
    );
}