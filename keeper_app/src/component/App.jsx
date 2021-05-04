import React from "react";
import CreateArea from "./CreateArea";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"

function App(){
  return(
    <div>
      <Header/>
      <CreateArea/>
      <Note/>
      <Footer/>
    </div>
  );
}

export default App;