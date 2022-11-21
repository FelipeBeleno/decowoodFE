/* eslint-disable no-unused-vars */
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

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import ArgonAlert from "components/ArgonAlert";


// Argon Dashboard 2 MUI example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useEffect, useState } from "react";
import { backendURL } from "helpers/variablesEntorno";


function Default() {

  const [generateUrl, setGenerateUrl] = useState(false)

  const [copiado, setCopiado] = useState(false)

  const [dataForm, setDataForm] = useState({})

  const [token] = useState(localStorage.getItem('x-token'))

  const [dataUrl, setDataUrl] = useState({})

  function onChange({ target }) {
    setDataForm({
      ...dataForm,
      [target.name]: target.value
    })
  }


  async function handleSubmit(e) {
    e.preventDefault();
    const body = await fetch(backendURL+'api/currentImg', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-token": token
      },
      body: JSON.stringify(dataForm)
    });

    const response = await body.json();

    setDataUrl(response.data);

    setGenerateUrl(true)

  }

  useEffect(() => {
    getToken()
  }, [])

  async function getToken() {

    const body = await fetch(backendURL+'api/auth/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        "password": "123456",
        "email": "felipebelenoo1101@gmail.com"
      })

    })
    let response = await body.json()

    localStorage.setItem('x-token', response.token)

  }



  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>

        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={12}>

          </Grid>
          <Grid item xs={12} md={generateUrl ? 6 : 12} p={3}>
            <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden", padding: 3 }} >
              <ArgonTypography
                fontWeight="medium"
                variant="h3"
              >Crea la url</ArgonTypography>

              <ArgonBox onSubmit={handleSubmit} component="form" role="form" mt={5}>
                <ArgonBox mb={1} >
                  <ArgonTypography variant="body1">Fecha caducidad</ArgonTypography>
                </ArgonBox>
                <ArgonBox mb={3} >
                  <ArgonInput onChange={onChange} name="fechaCaducidad" type="datetime-local" placeholder="Correo Institucional" size="large" />
                </ArgonBox>
                <ArgonBox mb={1} >
                  <ArgonTypography variant="body1">Codigo imagen</ArgonTypography>
                </ArgonBox>
                <ArgonBox mb={3}>
                  <ArgonInput onChange={onChange} name="idImg" type="text" placeholder={"Imagen"} size="large" />
                </ArgonBox>

                <ArgonButton variant="contained" type="submit" fullWidth color="info">Generar</ArgonButton>

              </ArgonBox>

            </Card>
          </Grid>

          {
            generateUrl
            &&
            <Grid item xs={12} md={6} p={3}>
              <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden", padding: 3 }} >

                <ArgonTypography
                  fontWeight="medium"
                  variant="h3"
                >Url generada</ArgonTypography>

                <Grid
                  container
                  mt={3}
                  direction="column"
                  justifyContent="space-evenly"
                >

                  <Grid item xs={12} md={12} >

                    <p
                      style={{ wordWrap: 'anywhere' }}

                    >{dataUrl.url}</p>
                  </Grid>

                  <Grid item xs={12} md={12} mt={2} >
                    <ArgonButton fullWidth component="contained" onClick={async () => {
                      await navigator.clipboard.writeText(dataUrl.url)
                      setCopiado(!copiado)
                    }}>
                      <Icon fontSize="default" ><ContentCopyIcon /></Icon>
                    </ArgonButton>
                  </Grid>
                  {
                    copiado
                    &&
                    <Grid item xs={12} mt={3} >
                      <ArgonAlert color="success" dismissible>Texto copiado</ArgonAlert>
                    </Grid>

                  }
                </Grid>

              </Card>
            </Grid>
          }


        </Grid>
      </ArgonBox>
      {/*  <Footer /> */}
    </DashboardLayout>
  );
}

export default Default;
