import { useEffect, useState } from "react";

const Crouser=()=>{
    const Imgarr=[
        'https://camo.githubusercontent.com/3cae61090608b8cbd681f5825ca5ac76af8d8d3ee12024926d51c5480aef5d6c/68747470733a2f2f796176757a63656c696b65722e6769746875622e696f2f73616d706c652d696d616765732f696d6167652d313032312e6a7067',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRylakhCt8y8FCUhEI0ftLZ-cieEzeOSlykkA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpPVyc4LETd6GWTNZWJCuiBWoEI3w5yHZeoA&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0G4Jj47yiz5zOPtf3AAha0jxUcoX4SAo_Gw&s'
    ]
    const [index,setIndex]=useState(0);
    useEffect(()=>{
        const interval=setInterval(() => {
            setIndex((index + 1) % Imgarr.length)
        }, 5000);

        return ()=>clearInterval(interval)
    },);

    return(
        <div>
            <div>
                <p onClick={()=>{
                    if(index===0){
                        setIndex(Imgarr.length-1)
                    }else{
                        setIndex((index - 1) % Imgarr.length)
                    }
                    
                }}>Left</p>
            </div>
            <div>
                <img src={Imgarr[index]}/>
            </div>
            <div>
                <p
                    onClick={()=>{
                        setIndex((index + 1) % Imgarr.length)
                    }}
                >Right</p>
            </div>
        </div>
    )
};
export default Crouser;