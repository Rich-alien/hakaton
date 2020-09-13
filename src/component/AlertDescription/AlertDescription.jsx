import React from "react";
import style from "./AlertDescription.module.css";
const baseUrl = "../../img/imgTree/";
class AlertDescription extends React.Component {
    state ={
        ForestDescription : [
            {
                id: 0,
                XY: [60.733070, 56.703531],
                img1: "../../img/imgTree/подсолнечник1.png",
                img2: "../../img/imgTree/подсолнечник2.PNG",
                Name: "Чердынский городской округ",
                HasTrees: true,
                S: 100,
            },
            {
                id: 1,
                XY: [60.730479, 56.700604],
                img1: "",
                img2: "",
                Name: "Чердынский городской округ",
                HasTrees: true,
                S: 100,
            },
            {
                id: 2,
                XY: [57.483593, 54.547379],
                img1: "",
                img2: "",
                Name: "озимовая пшеница, Черновское сельское поселение",
                HasTrees: true,
                S: 100,
            },
            {
                id: 3,
                XY: [57.024849, 57.550066],
                img1: "",
                img2: "",
                Name: "подсолнечник",
                HasTrees: true,
                S: 100,
            },
            {
                id: 4,
                XY: [57.024849, 57.550066],
                img1: "",
                img2: "",
                Name: "подсолнечник",
                HasTrees: true,
                S: 100,
            },
            {
                id: 5,
                XY: [57.024849, 57.550066],
                //не ее картинки
                img1: "../../img/imgTree/подсолнечник1.png",
                img2: "../../img/imgTree/подсолнечник2.png",
                Name: "Кудымкарский район",
                HasTrees: true,
                S: 7450,
            },

        ]
    }

    idF = this.props.idForest;
    render() {
        return (
            <div className={style.container}>
                {/*{*/}
                {/*    this.newObject = this.ForestDescription.filter(forest => {*/}
                {/*        return (*/}
                {/*            forest.id == this.props.idForest*/}
                {/*        )*/}

                {/*    })*/}
                {/*}*/}



                {/*{*/}
                {/*    this.ForestDescription.map((obj,id)=>{*/}
                {/*        return ( <img*/}
                {/*            src={require(obj[this.props.idForest].img2)}*/}
                {/*            alt="2"*/}
                {/*            className={style.img2}/>)*/}
                {/*    })*/}
                {/*}*/}
                <p className={style.textAlert}>2019год</p>
                <img src={require("../../img/imgTree/подсолнечник1.png")} alt="1" className={style.img1}/>
                <img src={require("../../img/imgTree/подсолнечник2.PNG")} alt="2" className={style.img2}/>
                <p className={style.textAlert}>2020год</p>
                <img src={require("../../img/imgTree/соликамский1.PNG")} alt="2" className={style.img2}/>
                <img src={require("../../img/imgTree/соликамский2.PNG")} alt="2" className={style.img2}/>
                <p className={style.textAlert}>Произошли за это время какие нибудь изменения ?</p>
                <div className={style.btnContainer}>
                    <button className={`${style.btnYes} ${style.btn}`} onClick={()=>{
                        alert("спасибо, что проверили")
                    }}>
                        Подтвердить
                    </button>
                    <button className={`${style.btnNo} ${style.btn}`} onClick={()=>{
                        alert("спасибо, что проверили")
                    }}>
                        Отклонить
                    </button>
                    <button className={`${style.btnBlock} ${style.btn}`} onClick={()=>{
                        alert("спасибо, что проверили")
                    }}>
                       Заблокировать
                    </button>
                </div>
                <div className={style.textContainer}>
                    <p className={style.SP}>{this.state.ForestDescription[this.idF].S}Га</p>
                    <p className={style.SP}>{this.state.ForestDescription[this.idF].Name}</p>
                </div>
            </div>
        )
    }
}

export default AlertDescription;