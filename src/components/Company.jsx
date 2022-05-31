import React from "react";


class Company extends React.Component{

     mylist2 =['Samsung','HTC','Micromax','Apple']

 render(){
     return(
         <div>
             <ul>
                 {this.mylist2.map((item)=><li>{item}</li>)}
             </ul>
         </div>
     )
 }

}

export default Company;
