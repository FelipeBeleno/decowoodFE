/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components

// @mui material components
import Card from "@mui/material/Card";
import CenterFocusWeakIcon from '@mui/icons-material/CenterFocusWeak';

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// css
import './index.css'
import { IconButton } from "@mui/material";
import { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

// others
import Draggable from "react-draggable";
import { toPng } from 'html-to-image';



import apple from "assets/images/apple-icon.png";
import { backendURL } from "helpers/variablesEntorno";

// Images
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signup-cover.jpg";



function Cover() {


  const params = useParams();

  const [dataPg, setDataPg] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [image, setImage] = useState("");
  const [long, setLong] = useState([220, 220])
  const trackPos = (data) => {
    console.log(position)
    setPosition({ x: data.x, y: data.y });
  };

  async function handleImage(e) {
    let img = e.target.files;
    let img1 = img[0];

    const formData = new FormData()
    formData.append("file", img1)
    formData.append("upload_preset", "decowood-img")

    const body = await fetch('https://api.cloudinary.com/v1_1/ditsuhfzm/upload', {
      method: 'POST',
      body: formData
    });

    const response = await body.json()
    console.log(response)
    setImage(response)
  }

  const ref = useRef()

  const hanldeClickImage = useCallback(() => {

    toPng(ref.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'decowood.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })

  }, []);

  useEffect(() => {
    getInfo(params.id)
  }, [])

  async function getInfo(id) {

    const body = await fetch( backendURL+'/api/currentImg/' + id);
    const response = await body.json();
    console.log(response.data)
    setDataPg(response.data)

  }


  //TODO: Guardar la imagen temporalmente en el storage y luego eliminarla

  return (
    <CoverLayout
      title="Bienvenido!"
      description="Capture la imagen de su espació"
      image={bgImage}
      imgPosition="top"
      button={{ color: "dark", variant: "gradient" }}
    >
      <Card>
        {
          dataPg.estado ?
            <>
              <ArgonBox p={3} mb={1} textAlign="center" style={{ overflow: 'auto' }} >
                {image === ''
                  &&
                  <div className={`image-render`} >
                    < IconButton aria-label="upload picture" component="label" >
                      <input hidden className='inputClass' type='file' accept='image/*' onChange={(e) => handleImage(e)} capture="environment" />
                      <CenterFocusWeakIcon sx={{ width: '14rem', height: '14rem' }} />
                    </IconButton>
                  </div>
                }
                {
                  image !== '' && dataPg.idImg
                  &&
                  <div className={`image-render`} ref={ref} style={{
                    background: `url(${image.url})`,
                    backgroundSize: '100% 100%',
                    border: 'none',
                    width: '1100px', height: '500px',
                    border: 'none'
                  }}
                  >
                    <Draggable
                      //axis="x"
                      //handle=".handle"
                      defaultPosition={{ x: 0, y: 0 }}
                      onDrag={(e, data) => trackPos(data)}
                      onStart={(e, data) => {
                        console.log(e, data)
                      }}
                      onStop={(e, data) => {
                        console.log(e, data)
                      }}
                    >

                      {<img src={dataPg.idImg ? dataPg.idImg : apple} alt='Img' style={{ width: long[0], height: long[1], zIndex: 10 }} />}
                    </Draggable>
                  </div>
                }
              </ArgonBox>
              <ArgonBox p={3}>
                <ArgonButton fullWidth variant="contained" color="info" onClick={() => hanldeClickImage()}>Descargar</ArgonButton>
              </ArgonBox>

            </>


            : <div style={{ padding: 6, textAlign: 'center' }}>
              <h1>Link inactivo</h1>
              <p >Para capturar tu espacio comunicate con nosotros y te generaremos un link para que accedas a nuestra herramienta.</p>
            </div>

        }
      </Card>
    </CoverLayout >
  );
}

export default Cover;
