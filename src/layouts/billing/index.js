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

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import Table from "examples/Tables/Table";
import ArgonBadgeDot from "components/ArgonBadge";

// Argon Dashboard 2 MUI components
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// React
import { useEffect, useState } from "react";
import { Card } from "@mui/material";

// personal 

import Dropzone from "components/DropZone/DropZone"
import ArgonAlert from "components/ArgonAlert";
import { functionFetch } from "helpers/functionFetch";
import ArgonAvatar from "components/ArgonAvatar";






function Billing() {

  const [token] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNmYwZDdkYTRmMzAwNjU3YzVmNDJkMiIsImlhdCI6MTY2ODgzMjA0MiwiZXhwIjoxNjY4ODUzNjQyfQ.TUPJMm9jY3_A3ZzoQqd6YZeJtZB4kt05UMlMTi6eU1g')

  const [board, setBoard] = useState('')

  const [copyText, setCopyText] = useState([false, ''])

  const [uploadImgCurrent, setUploadImgCurrent] = useState(false)

  const [name, setName] = useState('');

  const [resultFetch, setResultFetch] = useState([false, '', false]);

  const [dataTable, setDataTable] = useState([])

  async function uploadImg(img) {

    const formData = new FormData()
    formData.append("file", img.target.files[0])
    formData.append("upload_preset", "decowood-img")
    const body = await fetch('https://api.cloudinary.com/v1_1/ditsuhfzm/upload', {
      method: 'POST',
      body: formData
    });
    const response = await body.json()
    setUploadImgCurrent(response)
  }
  useEffect(() => {
    if (board !== 'agregar') {
      getImages()
    }
  }, [board])

  async function hanldeDelete(id) {
    const body = await fetch('http://localhost:8080/api/productos/'+id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-token": token
      }
    });
    const response = await body.json() 
    getImages()
  }

  async function getImages() {

    const body = await fetch('http://localhost:8080/api/productos', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-token": token
      }
    });
    const response = await body.json();

    let dta = response.data.map((r) => {
      return {
        nombre: [r.img, r.name],
        id: (<ArgonBox ml={-1.325} onClick={
          async () => {
            await navigator.clipboard.writeText(r._id)
            setCopyText([true, 'Texto copiado'])

            setTimeout(() => {
              setCopyText([false, ''])
            }, 3000);
          }}
        > {r._id}</ArgonBox>),
        accion: (
          <ArgonBox ml={-1.325}>
            <ArgonButton color="error" onClick={() => hanldeDelete(r._id)}>Eliminar</ArgonButton>
          </ArgonBox>
        )
      }
    });

    setDataTable(dta)

  }

  async function handleSubmit(e) {
    e.preventDefault();
    const body = await fetch('http://localhost:8080/api/productos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "x-token": token
      },
      body: JSON.stringify({
        name: name,
        img: uploadImgCurrent.secure_url
      })
    });

    const response = await body.json();

    if (response.status) {
      setResultFetch([true, 'Guardado con exito', true])
    } else {
      setResultFetch([false, 'Revise la información', true])
    }

    setTimeout(() => {
      setResultFetch([false, '', false])

    }, 3000);

  }

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <ArgonBox mt={4}>
        <ArgonBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={3}>

                <Grid item xs={12} md={6} xl={6}>
                  <DefaultInfoCard
                    onPress={true}
                    icon="addIcon"
                    title="Agregar cuadro"
                    description="Formulario para agregar producto"
                    fn={() => { setBoard('agregar') }}
                  />
                </Grid>

                <Grid item xs={12} md={6} xl={6}>
                  <DefaultInfoCard
                    onPress={true}
                    icon="imageIcon"
                    title="Ver Cuadros"
                    description="Tabla de consulta"
                    fn={() => { setBoard('tabla') }}
                  />
                </Grid>

              </Grid>
            </Grid>

          </Grid>
        </ArgonBox>
        {
          board === 'agregar'
            ? <Grid item xs={12} md={12} p={3}>
              <Card sx={{ position: "relative", display: "block", height: "100%", overflow: "hidden", padding: 3 }} >
                <ArgonTypography
                  fontWeight="medium"
                  variant="h3"
                >Agrega un cuadro</ArgonTypography>

                <ArgonBox component="form" role="form" mt={5} onSubmit={(e) => handleSubmit(e)}>
                  <ArgonBox mb={1} >
                    <ArgonTypography variant="body1">Nombre</ArgonTypography>
                  </ArgonBox>
                  <ArgonBox mb={3} >
                    <ArgonInput onChange={(e) => { setName(e.target.value) }} type="text" placeholder="nombre" size="large" />
                  </ArgonBox>
                  <ArgonBox mb={1} >
                    <ArgonTypography variant="body1">Imagen</ArgonTypography>
                  </ArgonBox>
                  <ArgonBox mb={3}>
                    <Dropzone open={uploadImg} />
                  </ArgonBox>
                  <ArgonBox mb={3}>
                    <ArgonAvatar
                      src={uploadImgCurrent.secure_url}
                      alt="profile-image"
                      variant="rounded"
                      size="xl"
                      shadow="sm"
                    />
                  </ArgonBox>
                  <ArgonButton type="submit" variant="contained" fullWidth color="info">Generar</ArgonButton>

                </ArgonBox>
                {resultFetch[2] &&
                  <Grid item xs={3} mt={3} sx={{ position: 'fixed', bottom: 0, right: 30 }}>
                    <ArgonAlert color={resultFetch[0] ? "success" : "error"} dismissible>{resultFetch[1]}</ArgonAlert>
                  </Grid>

                }
              </Card>
            </Grid>
            : <Table
              columns={[
                { name: "nombre", align: "left" },
                { name: "id", align: "left" },
                { name: "accion", align: "center" },
              ]}
              rows={dataTable}
            />
        }

      </ArgonBox>
      {copyText[0] &&
        <Grid item xs={3} mt={3} sx={{ position: 'fixed', bottom: 0, right: 30 }}>
          <ArgonAlert color="success" dismissible>Texto copiado</ArgonAlert>
        </Grid>

      }
    </DashboardLayout>
  );
}

export default Billing;
