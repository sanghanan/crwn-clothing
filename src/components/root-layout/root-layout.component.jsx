import { Outlet } from "react-router-dom";
import Header from "../header/header.component";

const RootLayout = () => {
    return ( <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
    </div> );
}
 
export default RootLayout;