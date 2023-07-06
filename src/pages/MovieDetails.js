import { Nav } from "../components/partials/Nav"
import Details from "../components/modules/landing/Details"
import image from "../assets/avengers.jpg"


export const MovieDetails = () => {


    return <main className="home">
        <Nav/>
 
        {/* <section className=""> */}
        {/* <section className="background-image" style={{ backgroundImage: `url(${image})`}}> */}
            
        <Details/>
    </main>
}