import { useEffect, useRef, useState } from "react";

const RevealOnScroll = ({ children }) => { 
    const [isVisible, setIsVisible] = useState(false); 
    const ref = useRef(null); 
  
    useEffect(() => { 
        const scrollObserver = new IntersectionObserver(([entry]) => { 
            if (entry.isIntersecting) { 
                setIsVisible(true); 
                scrollObserver.unobserve(entry.target); 
            } 
        }); 
  
        scrollObserver.observe(ref.current); 
        const current = ref.current;
        return () => { 
            if (current) { 
                scrollObserver.unobserve(current); 
            } 
        }; 
    }, []); 
  
    const classes = `transition-opacity duration-1000  
        ${isVisible ? "opacity-100" : "opacity-0"
        }`; 
  
    return ( 
        <div ref={ref} className={classes}> 
            {children} 
        </div> 
    ); 
  }; 
  
  export default RevealOnScroll