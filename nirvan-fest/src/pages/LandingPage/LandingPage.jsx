import Home from "../Home/Home"
import Sidebar from "../Sidebar/Sidebar"
import Navbar from "../Navbar/Navbar"
export default () => {
    return (
       <>

         <div>
            <Navbar/>
            <Sidebar/>
            <Home/>
         </div>
       
       </>
    )
}