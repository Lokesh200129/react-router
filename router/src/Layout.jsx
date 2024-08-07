import { Outlet } from "react-router-dom";
import Footer from "./component/Footer";
import Header from "./component/Header";

function Layout (){
    return(
        <>  
            <Header />
            <Outlet />                {/*  used to dynamically render component  */}
            <Footer />
        </>
    )
}
export default Layout