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
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  function handleImage(e) {
    let img = e.target.files;
    let img1 = img[0];
    let imgUrl = URL.createObjectURL(img1);
    setImage(imgUrl)
    console.log(imgUrl)
  }

  const hanldeClickImage = useCallback(async () => {
    const canvas = await html2canvas(document.getElementById('image-id'));
    const dataURL = canvas.toDataURL('image/png');
    downloadjs(dataURL, 'download.png', 'image/png');
  }, []);

  useEffect(() => {
    getInfo(params.id)
  }, [])

  async function getInfo(id) {

    const body = await fetch('http://localhost:8080/api/currentImg/' + id);
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
        <img src={dataPg?.idImg} style={{height:'50px', width:'50px'}} />
        <ArgonBox p={3} mb={1} textAlign="center">
          <div className={`image-render`}>
            {image === ''
              &&
              < IconButton aria-label="upload picture" component="label" >
                <input hidden className='inputClass' type='file' accept='image/*' onChange={(e) => handleImage(e)} capture="environment" />
                <CenterFocusWeakIcon sx={{ width: '14rem', height: '14rem' }} />
              </IconButton>
            }
          </div>
        </ArgonBox>
        <ArgonBox p={3}>
          <ArgonButton fullWidth variant="contained" color="info">Descargar</ArgonButton>
        </ArgonBox>
      </Card>
    </CoverLayout >
  );
}

export default Cover;
