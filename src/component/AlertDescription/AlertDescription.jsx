import React from "react";
import style from "./AlertDescription.module.css";

class AlertDescription extends React.Component{
    constructor(props) {
        super(props);



    }
    ForestDescription = [
        {
            id:0,
            XY:[60.733070, 56.703531],
            img1:"",
            img2:"",
            Name:"Чердынский городской округ",
            HasTrees:true,
            S:100,
        },
        {
            id:1,
            XY:[60.730479, 56.700604],
            img1:"",
            img2:"",
            Name:"Чердынский городской округ",
            HasTrees:true,
            S:100,
        },
        {
            id:2,
            XY:[57.483593, 54.547379],
            img1:"",
            img2:"",
            Name:"озимовая пшеница, Черновское сельское поселение",
            HasTrees:true,
            S:100,
        },
        {
            id:3,
            XY:[57.024849, 57.550066],
            img1:"",
            img2:"",
            Name:"подсолнечник",
            HasTrees:true,
            S:100,
        },

    ];
    render() {
        return(
            <div className={style.container}>
                {/*{ alert(this.props.id)}*/}
                {console.log(this.props.idForest)}
            </div>
        )
    }
}
export default AlertDescription;