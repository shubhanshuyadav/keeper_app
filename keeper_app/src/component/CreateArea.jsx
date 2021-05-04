import {useState} from "react"
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom'

function CreateArea(props){
const [note,setNote] = useState({
    title:"",
    content:""
});

const[isExpanded, setIsExpanded]=useState(false);


function handleIsExpand(){
    setIsExpanded(true);
}

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
            <form className="create-area"> 
           
            {isExpanded && <input 
                type="text"
                name="title"
                placeholder="Title"
                value={note.title}
                onChange={handleChange}
                />}

            <textarea 
                type="text"
                name="content"
                value={note.content}
                onChange={handleChange}
                rows={isExpanded?3:1}
                onClick={handleIsExpand}
                placeholder="Take note...">
            </textarea>

            <Zoom in={isExpanded}><Fab onClick={submitNote}><AddIcon/></Fab></Zoom>
            
            
            </form>  
    
    );
}

export default CreateArea;