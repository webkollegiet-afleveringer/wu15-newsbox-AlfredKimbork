import { Outlet, useLocation } from "react-router-dom";

import MainHeader from "../MainHeader";
import Navigation from "../Navigation";


const Layout = () => {
    const location = useLocation();
    
    return (
        <>
            <MainHeader />
            <Outlet />
            <Navigation currentView={location.pathname} />
        </>
    );
}

export default Layout;