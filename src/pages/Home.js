
import MostDownloads from "../components/modules/landing/MostDownloads";
import Popular from "../components/modules/landing/Popular";
import Upcoming from "../components/modules/landing/Upcoming";
export const Home=()=>{
   
    return <main className="wrapper-x background">
    <Popular/>
    <Upcoming/>
    <MostDownloads/>
    </main>
}
