import React, { useEffect } from 'react'
import { gsap, Power1 } from 'gsap'

function Text() {

    let tl = gsap.timeline({
        defaults: {duration:1, ease: "elastic.out(1, 0.3)"}
    });

    
    useEffect(()=>{
        setInterval(()=>{
            tl.to(".d", {
                scaleY:1,
                stagger:0.2
            }).to(".d", {
                scaleY:.6,
                stagger:"-.2"
            });
        }, 1000)
       
    })
    
    
    return (
        <div className="m">
         
           <p className="d">What is life without Christ</p>
           <p className="d">God will make everything possible</p>
           <p className="d">God will make everything possible</p>
           <p className="d">I need to fail, failing is the only thing that can make me succeed.</p>
        </div>
    )

    
}

export default Text
