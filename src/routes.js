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

/** 
  All of the routes for the Soft UI Dashboard React are added here,
  You can add a new route, customize the routes and delete the routes here.
  Once you add a new route on this file it will be visible automatically on
  the Sidenav.
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Argon Dashboard 2 MUI layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";

const routes = [
  {
    expo: 'private',
    type: "route",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-tv-2" />,
    component: <Dashboard />,
  },
  {
    expo: 'private',
    type: "route",
    name: "Clientes",
    key: "clientes",
    route: "/clientes",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-calendar-grid-58" />
    ),
    component: <Tables />,
  },
  {
    expo: 'private',
    type: "route",
    name: "Cuadros",
    key: "cuadros",
    route: "/cuadros",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-credit-card" />,
    component: <Billing />,
  },
  {
    expo: 'private',
    type: "route",
    name: "Usuarios",
    key: "usuarios",
    route: "/usuarios",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-app" />,
    component: <Billing />,
  },
  {
    expo: 'private',
    type: "route",
    name: "Log Consultas",
    key: "log-consultas",
    route: "/log-consultas",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Billing />,
  },
  {
    expo: 'private',
    type: "route",
    name: "Profile",
    key: "profile",
    route: "/profile",
    icon: <ArgonBox component="i" color="dark" fontSize="14px" className="ni ni-single-02" />,
    component: <Profile />,
  },
  {
    expo: 'public',
    type: "route",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: (
      <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-single-copy-04" />
    ),
    component: <SignIn />,
  },
  {
    expo: 'public',
    type: "route",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  },
  {
    expo: 'public',
    type: "route",
    name: "Forgot password",
    key: "forgot-password",
    route: "/authentication/forgot-password",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignIn />,
  },
  {
    expo: 'public',
    type: "route",
    name: "imagenCliente",
    key: "imagenCliente",
    route: "/imagenCliente/:id",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-collection" />,
    component: <SignUp />,
  }
];

export default routes;
