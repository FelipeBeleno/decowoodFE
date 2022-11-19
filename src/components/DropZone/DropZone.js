//*Dropzone.js*//
import PropTypes from "prop-types";

import { useDropzone } from "react-dropzone";
import "./index.css";
import ArgonButton from "components/ArgonButton";

function Dropzone({ open }) {
    const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
        useDropzone({});

    const files = acceptedFiles.map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div className="container" onClick={()=>{
            document.getElementById('input-zone').click()
        }} >
            <div className="dropzone" >
                <input className="input-zone" id="input-zone"  type="file" style={{display:'none'}} onChange={open}/>
                <div className="text-center">

                    <p className="dropzone-content">
                        Agrega una imagen
                    </p>

                   
                </div>
                <aside>
                    <ul>{files}</ul>
                </aside>
            </div>
        </div>
    );
}

export default Dropzone;



// Setting default values for the props of DefaultInfoCard
Dropzone.defaultProps = {


};

// Typechecking props for the Dropzone
Dropzone.propTypes = {
    open: PropTypes.any
};
