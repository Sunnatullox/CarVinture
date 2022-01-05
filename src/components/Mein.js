import AboutList from "./MeinList/AboutList"
import AreaInfarmationList from "./MeinList/AreaInfarmationList"
import CarsCard from "./MeinList/CarsCard"
import MeinHeader from "./MeinList/MeinHeader"
import SearchBoxItem from "./MeinList/SearchBoxItem"
import StoreList from "./MeinList/StoreList"
import Loader from "./MeinList/Loader"
import { useEffect, useState } from "react";
import Footer from "./Footer"
import Header from "./Header"
import Aos from "aos"




export default function Mein() {
    const [cars, setCars] = useState([])
    

    useEffect (()=> {   
        Aos.init();    
         getCars();
    },[])

    const getCars = async()=> {
        const response = await fetch("http://localhost:5000/cars");
        const data =  await response.json();
        setCars(data)
    }


    return (
        <div className="container">
           <Header/>
            <MeinHeader />
             {!cars.length ? (
                 <Loader/>
                 ):( 
                     <CarsCard  cars={cars} aos="slide-up" aos_offset="300" />          
            )
            } 
            <AreaInfarmationList/>
            <AboutList/>
            <StoreList/>
            <SearchBoxItem/>
            <Footer/>
        </div>
    )
}
  /* fetch("http://localhost:5000/Cars")
        .then(res => {
            return res.json();
        })
        .then(data =>{
           setCars(data)
        }); */

