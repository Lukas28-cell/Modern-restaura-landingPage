import React, { useState } from 'react'

const NavBar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const menuTogglebar = () =>{
        setToggleMenu(!toggleMenu);

        const handdleScroll = (event, targetId) =>{
            event.preventDefault();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                })
                
            }
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default NavBar
