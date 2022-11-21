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

// @mui icons
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";


function Footer() {
  return (
    <ArgonBox component="footer" py={6}>
      <Grid container justifyContent="center">
        <Grid item xs={10} lg={8}>
          <ArgonBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
            <ArgonBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                Company
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                About Us
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={{ xs: 0, lg: 3, xl: 6 }}>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                Team
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                Product
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={{ xs: 2, lg: 3, xl: 6 }}>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                Blog
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox>
              <ArgonTypography component="a" href="#" variant="body2" color="secondary">
                Pricing
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
        </Grid>
        <Grid item xs={12} lg={8}>
          <ArgonBox display="flex" justifyContent="center" mt={1} mb={3}>


            <ArgonBox mr={3} color="secondary">
              <a href="https://www.instagram.com/decowood.co/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon fontSize="small" />
              </a>
            </ArgonBox>
            <ArgonBox color="secondary">
              <a href="https://wa.me/573144916550" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon fontSize="small" />
              </a>
            </ArgonBox>
          </ArgonBox>
        </Grid>
        <Grid item xs={12} lg={8} sx={{ textAlign: "center" }}>

        </Grid>
      </Grid>
    </ArgonBox>
  );
}

export default Footer;
