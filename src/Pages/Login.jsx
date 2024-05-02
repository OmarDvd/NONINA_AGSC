import "../styles.css";
import NavigationBar from "../Components/NavigationBar";
import { Footer } from "../Components/Footer";
import React,{ useEffect, useState, Suspense} from "react";

import { FormularioLoginHook } from "../Components/FormularioLoginHook";
export default function Login({toggleState,cambiarRegistro,logeado}) {

  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
      return () => {
          setMounted(false);
      };
  }, []);
  return (
    <>
        <NavigationBar toggleState={toggleState} logeado={logeado} />
        {mounted && <div  style={{color: "white", backgroundImage:"url('https://assets.website-files.com/5f50c8823485c166e14fc0d7/600981acad87646365032f2a_bg-paint-wall.jpg')"}}>
  
 <div className='container'>
<div className="row">


<div className="col-12">
      <h1 className="d-block text-center mb-4 grana">LOGIN</h1>
      <FormularioLoginHook toggleState={toggleState}  />
      <button className=" btn  mt-4 " style={{background:'rgba(0,71,171,1)',color:'white'}} onClick={() => cambiarRegistro(true)}>Ir a registro</button>
    </div>
    </div>

    <div class="container  d-flex ">

    
<div className="mt-5 me-5"><h1 className="granaRegular">Vocabulario granaíno</h1></div>
<div className="typewriter mt-5 ms-5">
  <h1 className="grana">Malafollá</h1>
</div>
    </div>    
    </div>
    </div>}
    
    
    <Footer/>    <Footer/>
    <Footer/>
    <Footer/>
    <Footer/>
    <Footer/>
    <Footer/>


</>
  );
}
