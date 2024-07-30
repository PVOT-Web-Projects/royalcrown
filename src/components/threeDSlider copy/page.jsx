"use client"
import styles from "./page.module.css"
// import Spline from '@splinetool/react-spline';
import Spline from '@splinetool/react-spline/next';
function Model() {    
    return(
          <div className={styles.Text}>
            {/* <p>3d Model</p> */}
            <Spline scene="https://prod.spline.design/qkdd2u6R0Ei0yssu/scene.splinecode" className={styles.Spliendesign}/>
          </div>
    )
};
// https://my.spline.design/untitled-c7fe10b86bd7f6743f8acd38b0abcd58/
export default Model;