
"use client"

import "./cursorEffect.scss"
import FluidSimulation from 'fluid-simulation-react';
const CursorEffect = ()=>{
    const customConfig = {
        textureDownsample: 1,
        densityDissipation: 0.80,
      };
       const customColors = [
        [1, 1, 0], // Yellow
        [0, 1, 1]  // Cyan
      ]
    return(
        <FluidSimulation  config={customConfig} color={customColors}/>
    )
}
export default CursorEffect;