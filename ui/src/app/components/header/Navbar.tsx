import Logo from "./Logo";
import Search from "./Search";
import User from "./User";
import Container from "../Container";
import Filter from "./Filter";
import FramerMotion from "./FramerMotion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const NavBar = () => {
//   const [selected, setSelected] = useState(false)

//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScroll = () => {
//       const position = window.scrollY;
//       setScrollPosition(position);
//       if (position > 50){
//         setSelected(true);
//       }
//       else {
//         setSelected(false);
//       }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll, { passive: false });

//     return () => {
//         window.removeEventListener('scroll', handleScroll);
//     };
// }, []);

// console.log(scrollPosition);

    return (
      <header className=" bg-white z-10 shadow-sm fixed top-0 right-0 left-0" >
        <div className="py-4 border-b-[1px]">

        {/* <div onClick={() => setSelected(!selected)} className={` shadow  border mx-auto transition-all text-center my-8 rounded-full ${selected ? 'w-80 h-20' : 'w-52 h-12'}`}>
        {
          selected ? "selected" : "not"
        }
        </div> */}


          <Container>
            <div className="flex items-center justify-between gap-3 md:gap-0">
              <Logo />
              <motion.div  
              whileHover={{ scale: 1.2 }} whileTap={{ scale: 1.2 }}>
                <Search />
              </motion.div>
              <User />
            </div>
          </Container>
        </div>
        <Filter/>
      </header>
    );
  };
  
  export default NavBar;
  