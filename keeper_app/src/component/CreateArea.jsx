import {useState} from "react"

function CreateArea(props){
const [note,setNote] = useState({
    title:"",
    content:""
});

function handleChange(event){
    const {name, value}=event.target;
    setNote(prevValue =>{
        return{
            ...prevValue,
            [name]:value
        }
    })}

function submitNote(event){
    props.onAdd(note);
    setNote({
        title:"",
        content:""
    });
    event.preventDefault();
}

    return(
            <form> 
            <input 
                type="text"
                name="title"
                placeholder="Title"
                value={note.title}
                onChange={handleChange}
                />

            <textarea 
                type="text"
                name="content"
                value={note.content}
                onChange={handleChange}
                rows="3"
                placeholder="Take note...">
            </textarea>

            <button onClick={submitNote}>Add</button>
            </form>  
    
    );
}

export default CreateArea;