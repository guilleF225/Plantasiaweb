import CarouselProductos from "./CarouselProductos"

function SectionProductos () {
    return (
        <section className='productos section flex flex-col justify-start items-center h-screen w-full'>
            <h2 className='text-3xl pb-10'>Nuestros Productos</h2>
            <div className="width-20">
                <CarouselProductos />
            </div>
      </section>
    )
}
export default SectionProductos