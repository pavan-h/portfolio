import jsPDF from 'jspdf';
import React from 'react'
import resume from "../images/resume.png"

class Resume extends React.Component {
     btn = {
        padding:"10px", backgroundColor:"rgb(107,153,153)", fontSize:"1.4rem", border:"none", marginTop:"10px", borderRadius:"7px", cursor:"pointer"
    }

    

    download = () => {
        let doc = new jsPDF("portrait", "px", "a4", "false");
        doc.addImage(resume, "PNG", 5,10,480,600);
        doc.save("resume.pdf")
    }

    
    render() { 
        return (
            <>
            <div className='btn' style={{backgroundColor:"white", textAlign:"center"}}>
                <button className='download-btn' onClick={this.download} style={this.btn} >Download</button>
            </div>
             <img src={resume} />           
            </>
        );
    }
}
 
export default Resume;