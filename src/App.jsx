import React from "react";
import Card from './Card';
import Data from './Data';

function App(){
    return (
        <>
        <h1 className="heading" >List of my favourite Netflix web series</h1>
        <div  className="main-div">
            {
                Data.map(function(cvalue,i){
                    if(i<3)
                    {
                        return(
                            <Card
                            key={cvalue.id}
                            imgsrc={cvalue.imgsrc}
                            imgalt={cvalue.imgalt}
                            platform={cvalue.platform}
                            name={cvalue.name}
                            link={cvalue.link}
                            />                   
                        );
                    }
                })
            }
        </div>

        <div className="div2">
        {
            Data.map(function(cvalue,i){
                if(i>=3)
                {
                    return(
                        <Card
                        key={cvalue.id}
                        imgsrc={cvalue.imgsrc}
                        imgalt={cvalue.imgalt}
                        platform={cvalue.platform}
                        name={cvalue.name}
                        link={cvalue.link}
                        />
                    );
                }
            })
        }
        </div>
        </>
    );
}

export default App;