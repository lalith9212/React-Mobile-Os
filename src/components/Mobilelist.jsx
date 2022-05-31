import React from "react";


class Lists extends React.Component{

 mylist =['Android','Blackberry','Iphone','Windows Phone']

 render(){
     return(
         <div>
             <ul>
                 {this.mylist.map((item)=><li>{item}</li>)}
             </ul>
         </div>
     )
 }

}

export default Lists;


// const mylist2 =['Samsung','HTC','Micromax','Apple'];

// const operating = mylist.map((mylist)=>{
//     return <li>{mylist}</li>
// });

// ReactDom.render(
//     <ul>{operating}</ul>,
//     document.getElementById('app')
// )

// export default Mobile;
// export default 