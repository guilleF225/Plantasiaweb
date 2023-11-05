import { Carousel, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
const SETTINGS = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
}

const PRODUCTOS = [{
    id: 1,
    title: "Aceite de Cannabis",
    image: "https://insumoscosmetica.com/wp-content/uploads/2022/06/14052.9305.jpg",
    description: "Aceite de Cannabis",
}, {
    id: 2,
    title: "Tintura madre",
    image: "https://insumoscosmetica.com/wp-content/uploads/2022/06/14052.9305.jpg",
    description: "Tintura madre",
}, {
    id: 3,
    title: "Tintura madres",
    image: "https://insumoscosmetica.com/wp-content/uploads/2022/06/14052.9305.jpg",
    description: "Tintura madres",
    }]
function CarouselProductos() {
    const [settings, setSettings] = useState({})
    const [productos, setProductos] = useState([{}])
    useEffect(() => {
        setProductos(PRODUCTOS)
        setSettings(SETTINGS)
    }, [])
    const renderProducts = (lista) => {
        return(
       lista.map((producto) => {
           return(<div key={producto.id} className="relative h-96 w-96">
           <img
             src={producto.image}
             alt="image 1"
             className="h-full w-full object-fit"
           />
           <div className="absolute inset-0 flex flex-col justify-center items-center h-full w-full bg-black/75">
             <div className="w-3/4 gap-6 text-center md:w-2/4">
               <h1
                 
                           className="mb-4 text-white pb-10 text-1xl md:text-2xl lg:text-3xl"
                           
                       >
                           
                 {producto.title}
                       </h1>
                       <h1 
                           className="mb-4 text-white pb-10 text-1xl md:text-2xl lg:text-3xl"
                           
                       >
                           {producto.description}
                       </h1>
                       
               <div className="justify-end">
                 <Button size="md" color="white" variant="text">
                   Ver más
                 </Button>
                         </div>
             </div>
           </div>
         </div>)
       }))
    }
    
  return (
      <Carousel className="rounded-xl h-96 w-96 overflow-hidden" {...settings} >
      {renderProducts(productos)}
      
    </Carousel>
  );
}
export default CarouselProductos