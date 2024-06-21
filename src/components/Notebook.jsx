import { IpynbRenderer } from "react-ipynb-renderer-katex";

// Formula renderer for katex
import 'katex/dist/katex.min.css';

// Jupyter theme
import "react-ipynb-renderer-katex/dist/styles/monokai.css";
// import ipynb file as json
import notebook from "../assets/RAG.ipynb" 

export default function Notebook(){
    return(
        
        <div className="w-screen flex flex-col items-center justify-center"> 
            <div className="h-12 border w-screen  border-b-2 flex items-center justify-center">Tashwin SJ <span className="ml-[600px]">About</span></div> 
            <IpynbRenderer
              ipynb={notebook}
            />
        </div>
        
    )
}