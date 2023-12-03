import {
  createBrowserRouter,

} from "react-router-dom";


import Home from "../../pages/home/Home";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
// import ErrorPage from "../../pages/errorpage/ErrorPage";
// import AddBook from "../pages/addbook/AddBook";
// import AllBooks from "../pages/allbooks/AllBooks";
// import BorrowedBooks from "../pages/borrowedbooks/BorrowedBooks";
// import UpdateBooks from "../pages/updatebooks/UpdateBooks";
// import AllBooksByCategory from "../pages/allbooksbycategory/AllBooksByCategory";
// import DetailsBook from "../pages/detailbook/DetailsBook";
// import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../../pages/errorpage/ErrorPage";
import MainLayout from "../../layouts/MainLayout";
import PetListing from "../../pages/petListing/PetListing";
import UserDashboard from "../../pages/userDashboard/UserDashboard";
import AddPet from "../../pages/addpet/AddPet";
import AddPetDashboard from "../../pages/addpet/addpetdashboard";
import AdoptPet from "../../pages/petListing/petlistingComponent/AdoptPet";
import MyAddedPets from "../../pages/userDashboard/myaddedpet/MyAddedPets";
import AdoptionReq from "../../pages/userDashboard/adoptionReq/AdoptionReq";
import UpdatePet from "../../pages/userDashboard/myaddedpet/updatePets/UpdatePet";
import AdoptionReqDashboard from "../../pages/userDashboard/AdoptionReqDashboard";
import MyAddedPetsDashboard from "../../pages/userDashboard/MyAddedPetsDashboard";
import CreateDonationCampaignDashboard from "../../pages/userDashboard/CreateDonationCampaignDashboard";
import DonationCampaign from "../../pages/donationCampaign/DonationCampaign";
import DonationCampaignDetails from "../../pages/donationCampaign/donationCampaignDetails/DonationCampaignDetails";
import MyDonationCamp from "../../pages/donationCampaign/myDonationCamp/MyDonationCamp";
import AllUsers from "../../pages/userDashboard/admin/alluser/AllUsers";
import AllUsersDeshboard from "../../pages/userDashboard/admin/alluser/AllUsersDeshboard";
import AllPetsAdmin from "../../pages/userDashboard/admin/allpets/AllPetsAdmin";
import AllDonationCampAdmin from "../../pages/userDashboard/admin/allDonationCamp/AllDonationCampAdmin";
import AllPetsAdminDashboard from "../../pages/userDashboard/admin/allpets/AllPetsAdminDashboard";
import AllDonationCampAdminDashboard from "../../pages/userDashboard/admin/allDonationCamp/AllDonationCampAdminDashboard";
import UpdateDonationCamp from "../../pages/userDashboard/updateDonationCampaign/UpdateDonationCamp";
import MyDonationCampDashboard from "../../pages/donationCampaign/myDonationCamp/MyDonationCampDashboard";
import MyDonation from "../../pages/userDashboard/myDonation/MyDonation";
import MyDonationDashboard from "../../pages/userDashboard/myDonation/MyDonationDashboard";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch('http://localhost:5007/PetCategory')
      },
      {
        path: '/petlisting',
        element: <PetListing></PetListing>
      },
      {
        path: '/adoptionreq',
        element: <AdoptionReqDashboard></AdoptionReqDashboard>
      },
      {
        path: '/donationcampaign',
        element: <DonationCampaign></DonationCampaign>
      },
      {
        path: '/donationcampaigndetails/:id',
        element: <DonationCampaignDetails></DonationCampaignDetails>,
        loader: ({ params }) => fetch(`http://localhost:5007/adddonationcamp/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/userdashboard',
        element: <UserDashboard></UserDashboard>
      },
      {
        path: '/addpet',
        element: <AddPetDashboard></AddPetDashboard>
      },
      {
        path: '/adoptpet/:id',
        element: <AdoptPet></AdoptPet>,
        loader: ({ params }) => fetch(`http://localhost:5007/pets/${params.id}`)
      },
      {
        path: '/myaddedpets',
        element: <MyAddedPetsDashboard></MyAddedPetsDashboard>
      },
      {
        path: '/createdonationcamp',
        element:<CreateDonationCampaignDashboard></CreateDonationCampaignDashboard>
      },
      {
        path: '/mydonation',
        element:<MyDonationDashboard></MyDonationDashboard>
      },
      {
        path: '/updatedonationcamp/:donationCampaignId',
        element:<UpdateDonationCamp></UpdateDonationCamp>,
        loader: ({ params }) => fetch(`http://localhost:5007/adddonationcamp/${params.donationCampaignId}`)
      },
      
      
      {
        path: '/updatepet/:petId',
        element: <UpdatePet></UpdatePet>,
        loader: ({ params }) => fetch(`http://localhost:5007/pets/${params.petId}`)
        
      },
      {
        path:'/mydonationcamp',
        element:<MyDonationCampDashboard></MyDonationCampDashboard>
      },
      {
           path:'/allusers',
           element:<AllUsersDeshboard></AllUsersDeshboard>
      },
      {
        path:'/allpetsadmin',
        element:<AllPetsAdminDashboard></AllPetsAdminDashboard>
   },

 {
        path:'/alldonationcampadmin',
        element:<AllDonationCampAdminDashboard></AllDonationCampAdminDashboard>
   },
     


     

    ]
  },

]);
export default router;