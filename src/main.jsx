import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Homepage from './Pages/Homepage';
import AboutUs from './Pages/AboutUs';
import Faq from './Pages/Faq';
import ContactPage from './Pages/Contact';
import Errorpage from './Pages/Errorpage';
import Organogram from './Pages/Organogram';
import MissionInfographic from './Pages/Mission';
import Md from './Pages/Md';
import CategoryDisplay from './Pages/CategoryDisplay';
import FashionAccessories from './Pages/FashionAccessories';
import HomeTextile from './Pages/HomeTextile';
import NonTextile from './Pages/NonTextile';
import ServicesPage from './Pages/ServicesPage';
import CompanyGoals from './Pages/CompanyGoals';
import CompliancePage from './Pages/Compliance';
import QualityPage from './Pages/QualityPage';
import CareerForm from './Pages/CareerForm';
import StrengthSection from './Pages/StrengthSection';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Errorpage/>,
    children:[
      {
        path: "/",
        element: <Homepage/>,
      },
      {
        path: "/our-company/aboutus",
        element: <AboutUs/>,
      },
      {
        path: "/our-company/goal",
        element: <CompanyGoals/>,
      },
      {
        path: "/our-company/compliance",
        element: <CompliancePage/>,
      },
      {
        path: "/ourservices",
        element: <ServicesPage/>,
      },
      {
        path: "/quality",
        element: <QualityPage/>,
      },
      {
        path: "/our-company/organogram",
        element: <Organogram/>,
      },
      {
        path: "/contact",
        element: <ContactPage/>,
      },
      {
        path: "/our-company/mission",
        element: <MissionInfographic/>,
      },
      {
        path: "/our-company/strength",
        element: <StrengthSection/>,
      },
      {
        path: "/our-company/md",
        element: <Md/>,
      },
      {
        path: "/gallery/:category/:subcategory",
        element: <CategoryDisplay/>,
      },
      {
        path: "/gallery/fashion-accessories",
        element: <FashionAccessories/>,
      },
      {
        path: "/gallery/home-textile",
        element: <HomeTextile/>,
      },
      {
        path: "/gallery/non-textile",
        element: <NonTextile/>,
      },
      {
        path: "/career",
        element: <CareerForm/>,
      },
      {
        path: "/faq",
        element: <Faq/>,
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
