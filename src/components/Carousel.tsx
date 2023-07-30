import { useEffect, useRef } from "react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Glider from "glider-js";
import "glider-js/glider.min.css";
import PrevIcon from "../assets/PrevIcon.svg";
import NextIcon from "../assets/NextIcon.svg";
// import { ProductsContext } from "../App";
const Carousel = () => {
  // const products = useContext(ProductsContext);
  const gliderRef = useRef<HTMLDivElement | null>(null);
  const gliderPrevRef = useRef<HTMLButtonElement | null>(null);
  const gliderNextRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if(!gliderRef.current || !gliderPrevRef.current || !gliderNextRef.current) return;
    new Glider(gliderRef.current, {
      slidesToShow: 1,
      draggable: true,
      scrollLock: true,
      arrows: {
        prev: gliderPrevRef.current,
        next: gliderNextRef.current
      }
    });
    }, [])
  return (
    <div data-name="Single Item" className="relative w-[80%] h-[500px]">
      <div className="glider h-full" ref={gliderRef}>
        <div className="w-[80%] aspect-video rounded-lg">
          <img src="https://images.freeimages.com/images/large-previews/ac9/railway-hdr-1361893.jpg" alt="carousel 1" className="object-fill w-full h-full rounded-lg"/>
        </div>
        <div className="w-[80%] aspect-video">
          <img src="https://images.freeimages.com/images/large-previews/212/flowers-1370428.jpg" alt="carousel 1" className="object-fill w-full h-full rounded-lg"/>
        </div>
        <div className="w-[80%] min-h-[500px] bg-slate-400 rounded-lg"></div>
        <div className="w-[80%] min-h-[500px] bg-rose-400 rounded-lg"></div>
        <div className="w-[80%] min-h-[500px] bg-slate-400 rounded-lg"></div>
        <div className="w-[80%] min-h-[500px] bg-rose-400 rounded-lg"></div>
        <div className="w-[80%] min-h-[500px] bg-slate-400 rounded-lg"></div>
        <div className="w-[80%] min-h-[500px] bg-rose-400 rounded-lg"></div>
        <div className="w-[80%] min-h-[500px] bg-slate-400 rounded-lg"></div>
        <div className="w-[80%] min-h-[500px] bg-rose-400 rounded-lg"></div>
        <div className="w-[80%] min-h-[500px] bg-slate-400 rounded-lg"></div>
        
      </div>
      <button role="button" aria-label="Previous" className="absolute -left-4 top-1/2 -translate-x-1/2 h-10 w-10" ref={gliderPrevRef}>
        <img src={PrevIcon} alt="previous"/>
      </button>
      <button role="button" aria-label="Next" className="absolute -right-16 top-1/2 -translate-x-1/2 h-10 w-10" ref={gliderNextRef}>
        <img src={NextIcon} alt="next"/>
      </button>
    </div>
  )
}

export default Carousel