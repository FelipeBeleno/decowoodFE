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
import { Link, useLocation, useParams } from "react-router-dom";


// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

//Image blue tower
import Bg from "assets/images/background-blue-tower.png";
import { useEffect, useState } from "react";

// Image

function Illustration() {

  const [forgot, setForgot] = useState(false)
  const location = useLocation()
  useEffect(() => {

    if (location.pathname === "/authentication/forgot-password") {
      setForgot(true)
    } else {
      setForgot(false)
    }
  }, [location.pathname])


  return (
    <IllustrationLayout
      title={forgot ? "Recupere su contraseña" : "Inicio de sesión"}
      description={forgot ? "Ingrese su email para la recuperación de la contraseña" : "Ingrese su email y constraseña para el incio de sesión"}
      illustration={{
        image: Bg,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput type="email" placeholder="Correo Institucional" size="large" />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput type="password" placeholder={forgot ? "Correo Institucional" : "Contraseña"} size="large" />
        </ArgonBox>
        {/* 
        <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox>
        */}
        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" fullWidth>
            {forgot ? "Confirmar" : "Iniciar Sesión"}
          </ArgonButton>
        </ArgonBox>
        <ArgonBox mt={3} textAlign="center">
          
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            ¿Olvido su contraseña?  {"  "}
            <ArgonTypography
              component={Link}
              to={forgot ? "/authentication/sign-in" : "/authentication/forgot-password"}
              variant="button"
              color="info"
              fontWeight="medium"
            >
              ¡Click aqui!
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
