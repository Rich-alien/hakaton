import React from "react";
import style from "./YandexMap.module.css"
import {YMaps, Map, Placemark, Polyline} from 'react-yandex-maps';
import AlertDescription from "../AlertDescription/AlertDescription";
// import ReactDOM from 'react-dom';
// import AlertDescription from "../AlertDescription/AlertDescription";

class YandexMap extends React.Component {
    state = {
        showComponent : false,
        idDesc:0
    }
    mapData = {
        center: [58.654520, 56.275120],
        zoom: 6,
    };
    // coordination = [
    //     [60.733070, 56.703531],
    //     [60.730479, 56.700604],
    //     [57.483593, 54.547379],
    //     [57.024849, 57.550066],
    // ]
    //координаты Кудымарского
    coordPolygon = [
        [59.523145, 55.392910],
        [59.495356, 55.575470],
        [59.372980, 55.522361],
        [59.366567, 55.557651],
        [59.366567, 55.557651],
        [59.345374, 55.582108],
        [59.328411, 55.576728],
        [59.333526, 55.551292],
        [59.295582, 55.531725],
        [59.315308, 55.395006],
        [59.155173, 55.305490],
        [59.197894, 54.980500],
        [59.188374, 54.983924],
        [59.136219, 54.964357],
        [59.137725, 54.950172],
        [59.122415, 54.954085],
        [59.110865, 54.935986],
        [59.084739, 54.939410],
        [59.080215, 54.946259],
        [59.066639, 54.942345],
        [59.058089, 54.919844],
        [59.049034, 54.916909],
        [59.066850, 54.941044],
        [59.058335, 54.918567],
        [59.049819, 54.916201],
        [59.043734, 54.874797],
        [59.048602, 54.852320],
        [59.047081, 54.828069],
        [59.047044, 54.828559],
        [59.036761, 54.836434],
        [58.987173, 54.852789],
        [58.987485, 54.823713],
        [58.987228, 54.822991],
        [58.889661, 54.729842],
        [58.882061, 54.737546],
        [58.879889, 54.772564],
        [58.863597, 54.797077],
        [58.863959, 54.816687],
        [58.805605, 54.799178],
        [58.802341, 54.809684],
        [58.807056, 54.845402],
        [58.793270, 54.848204],
        [58.787100, 54.828594],
        [58.766770, 54.834196],
        [58.754420, 54.856608],
        [58.758687, 54.885656],
        [58.713683, 54.839008],
        [58.666755, 54.894626],
        [58.659290, 54.864724],
        [58.634708, 54.868312],
        [58.607305, 54.873097],
        [58.618207, 54.826449],
        [58.598893, 54.786979],
        [58.606994, 54.756479],
        [58.621632, 54.741527],
        [58.620075, 54.700263],
        [58.602632, 54.739733],
        [58.601697, 54.710429],
        [58.608551, 54.663184],
        [58.617272, 54.658998],
        [58.617525, 54.619171],
        [58.626821, 54.555313],
        [58.633254, 54.523727],
        [58.630038, 54.510681],
        [58.641474, 54.488022],
        [58.653264, 54.427597],
        [58.660050, 54.376785],
        [58.677902, 54.293701],
        [58.679330, 54.295074],
        [58.695388, 54.277222],
        [58.687181, 54.251129],
        [58.703950, 54.170792],
        [58.695031, 54.146759],
        [58.698242, 54.135086],
        [58.705020, 54.136459],
        [58.717501, 54.055435],
        [58.732473, 53.997757],
        [58.747082, 53.929779],
        [58.747082, 53.929779],
        [58.761329, 53.967544],
        [58.765602, 53.936645],
        [58.778061, 53.942825],
        [58.781976, 53.920853],
        [58.798343, 53.929092],
        [58.816124, 53.872101],
        [58.838749, 53.822550],
        [58.862352, 53.801039],
        [58.887286, 53.807557],
        [58.936429, 53.771053],
        [58.976768, 53.763883],
        [58.976768, 53.763883],
        [59.033163, 53.865247],
        [59.068363, 53.884803],
        [59.084442, 53.914137],
        [59.088126, 53.900448],
        [59.126615, 53.871766],
        [59.112563, 53.827765],
        [59.183432, 53.732593],
        [59.208469, 53.688919],
        [59.228818, 53.701304],
        [59.235154, 53.729334],
        [59.233821, 53.755408],
        [59.257154, 53.817987],
        [59.238822, 53.851232],
        [59.215142, 53.893603],
        [59.214141, 53.935322],
        [59.232820, 54.009634],
        [59.213474, 54.055917],
        [59.209804, 54.087206],
        [59.220146, 54.132184],
        [59.222481, 54.155000],
        [59.214475, 54.164778],
        [59.216477, 54.269075],
        [59.187773, 54.287328],
        [59.187439, 54.306232],
        [59.201127, 54.304276],
        [59.213808, 54.320572],
        [59.226484, 54.314054],
        [59.240822, 54.357077],
        [59.273478, 54.394233],
        [59.273811, 54.456160],
        [59.271813, 54.497227],
        [59.255488, 54.515479],
        [59.266816, 54.552635],
        [59.289461, 54.652370],
        [59.302775, 54.670622],
        [59.322071, 54.673230],
        [59.340690, 54.660192],
        [59.325729, 54.869440],
        [59.346341, 54.883781],
        [59.328057, 55.044139],
        [59.351990, 55.052613],
        [59.334707, 55.193415],
        [59.444243, 55.241001],
        [59.523145, 55.392910]
    ];
    coordPolygon2 = [
        [59.980670, 55.432349],
        [59.968300, 55.501013],
        [59.958677, 55.566931],
        [59.984792, 55.591651],
        [60.021867, 55.613623],
        [60.012259, 55.698767],
        [60.004021, 55.761939],
        [60.004021, 55.761939],
        [59.975173, 55.778418],
        [59.984792, 55.819617],
        [59.976547, 55.869055],
        [59.984792, 55.910254],
        [59.965551, 55.937720],
        [59.966926, 55.976172],
        [59.972424, 55.984412],
        [59.969675, 56.031104],
        [59.931165, 56.020117],
        [59.922907, 56.061316],
        [59.870559, 56.042090],
        [59.859528, 56.121741],
        [59.856268, 56.205449],
        [59.841067, 56.261300],
        [59.847712, 56.290432],
        [59.853802, 56.295051],
        [59.858732, 56.325076],
        [59.856702, 56.380506],
        [59.874094, 56.394941],
        [59.895243, 56.407066],
        [59.903144, 56.395572],
        [59.920859, 56.391601],
        [59.920859, 56.437329],
        [59.958037, 56.423624],
        [59.994809, 56.413825],
        [60.034395, 56.419541],
        [60.038065, 56.433423],
        [60.077192, 56.438322],
        [60.019620, 56.416257],
        [60.037504, 56.433579],
        [60.070362, 56.437043],
        [60.108943, 56.440507],
        [60.142304, 56.446281],
        [60.146329, 56.427805],
        [60.164718, 56.442817],
        [60.173909, 56.452055],
        [60.185969, 56.465913],
        [60.185969, 56.484390],
        [60.179078, 56.498247],
        [60.172186, 56.507486],
        [60.164718, 56.512105],
        [60.157249, 56.524807],
        [60.153226, 56.550213],
        [60.155897, 56.561060],
        [60.159961, 56.574942],
        [60.161388, 56.581783],
        [60.157281, 56.587124],
        [60.153415, 56.588581],
        [60.147857, 56.593436],
        [60.143507, 56.595378],
        [60.138188, 56.594893],
        [60.129968, 56.592465],
        [60.126099, 56.625481],
        [60.123680, 56.655584],
        [60.119568, 56.687144],
        [60.112069, 56.758517],
        [60.102874, 56.847855],
        [60.097065, 56.903205],
        [60.082539, 57.034299],
        [60.034556, 57.017305],
        [59.964639, 56.988659],
        [59.947136, 57.144029],
        [59.931084, 57.289688],
        [59.951513, 57.366888],
        [59.960264, 57.431464],
        [59.970714, 57.508663],
        [59.962695, 57.615966],
        [59.988129, 57.628626],
        [59.982977, 57.687677],
        [60.002551, 57.692140],
        [60.004908, 57.682305],
        [60.010317, 57.681284],
        [60.014640, 57.686084],
        [60.018391, 57.691858],
        [60.021132, 57.714088],
        [60.027478, 57.728812],
        [60.019833, 57.768652],
        [60.005548, 57.845446],
        [59.991690, 57.917621],
        [59.936778, 57.891638],
        [59.934175, 57.900299],
        [59.877429, 57.873739],
        [59.820876, 57.847178],
        [59.828788, 57.776431],
        [59.791332, 57.760264],
        [59.799465, 57.690976],
        [59.752380, 57.670189],
        [59.703771, 57.649981],
        [59.702024, 57.662683],
        [59.661801, 57.644207],
        [59.651300, 57.622843],
        [59.613060, 57.601479],
        [59.621529, 57.522953],
        [59.586764, 57.508518],
        [59.596116, 57.402854],
        [59.536451, 57.379181],
        [59.530451, 57.364606],
        [59.529623, 57.335618],
        [59.522790, 57.320920],
        [59.525068, 57.300506],
        [59.514713, 57.287441],
        [59.514092, 57.251104],
        [59.503112, 57.230689],
        [59.490678, 57.229873],
        [59.480312, 57.217624],
        [59.484459, 57.196802],
        [59.489227, 57.198027],
        [59.493165, 57.191494],
        [59.489849, 57.178429],
        [59.495445, 57.172305],
        [59.499382, 57.182512],
        [59.504148, 57.176388],
        [59.496067, 57.146583],
        [59.497103, 57.130660],
        [59.493580, 57.121270],
        [59.492336, 57.068602],
        [59.496688, 57.049412],
        [59.496274, 56.982862],
        [59.490885, 56.964898],
        [59.493787, 56.951016],
        [59.504355, 56.947750],
        [59.503734, 56.931419],
        [59.492750, 56.911413],
        [59.498346, 56.889366],
        [59.502905, 56.894674],
        [59.504977, 56.880384],
        [59.496688, 56.860786],
        [59.516370, 56.685225],
        [59.527139, 56.678284],
        [59.536041, 56.678284],
        [59.549286, 56.660320],
        [59.589817, 56.650113],
        [59.600769, 56.646846],
        [59.608412, 56.637864],
        [59.608412, 56.629290],
        [59.593658, 56.606358],
        [59.592184, 56.595676],
        [59.596238, 56.588393],
        [59.594273, 56.576255],
        [59.597713, 56.564845],
        [59.576698, 56.527459],
        [59.580754, 56.480605],
        [59.594273, 56.485461],
        [59.602258, 56.424526],
        [59.592307, 56.418943],
        [59.597344, 56.370147],
        [59.611838, 56.377915],
        [59.617610, 56.365777],
        [59.621293, 56.373788],
        [59.624730, 56.366991],
        [59.616382, 56.337616],
        [59.599187, 56.339801],
        [59.598696, 56.331547],
        [59.611347, 56.322565],
        [59.611838, 56.305571],
        [59.616996, 56.301687],
        [59.616750, 56.278867],
        [59.624607, 56.268913],
        [59.621661, 56.259446],
        [59.640071, 56.224245],
        [59.646451, 56.231042],
        [59.655406, 56.224973],
        [59.649518, 56.263815],
        [59.664603, 56.257746],
        [59.670610, 56.190500],
        [59.675881, 56.192685],
        [59.678700, 56.185645],
        [59.682989, 56.193171],
        [59.683725, 56.210650],
        [59.689239, 56.209921],
        [59.691076, 56.197298],
        [59.698794, 56.196084],
        [59.708591, 56.203609],
        [59.718019, 56.198026],
        [59.725118, 56.200453],
        [59.735275, 56.179818],
        [59.741270, 56.173264],
        [59.744083, 56.151900],
        [59.732216, 56.125196],
        [59.715570, 56.114514],
        [59.714346, 56.097521],
        [59.711040, 56.086111],
        [59.717162, 56.082227],
        [59.715325, 56.060378],
        [59.710183, 56.061591],
        [59.701121, 56.032702],
        [59.703570, 56.018865],
        [59.710918, 56.029789],
        [59.713244, 56.005998],
        [59.730625, 56.000172],
        [59.737355, 55.986577],
        [59.735520, 55.974196],
        [59.741637, 55.967156],
        [59.747753, 55.955503],
        [59.737233, 55.933168],
        [59.725608, 55.947006],
        [59.727811, 55.901366],
        [59.719977, 55.897724],
        [59.701733, 55.906221],
        [59.713734, 55.830478],
        [59.709571, 55.825623],
        [59.713979, 55.806930],
        [59.718753, 55.809115],
        [59.732583, 55.698656],
        [59.684465, 55.678702],
        [59.719738, 55.418700],
        [59.752650, 55.430595],
        [59.763165, 55.366020],
        [59.830092, 55.386169],
        [59.835825, 55.355581],
        [59.944823, 55.403648],
        [59.938986, 55.425012],
        [59.925120, 55.443462],
        [59.926702, 55.476478],
        [59.935095, 55.478177],
        [59.948227, 55.474536],
        [59.961476, 55.464097],
        [59.954791, 55.409232],
        [59.981331, 55.423549],
        [59.980670, 55.432349],
    ];
    ForestDescription = [
        {
            id: 0,
            XY: [60.733070, 56.703531],
            img1: "",
            img2: "",
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
            HasTrees: false,
            S: 100,
        },
        {
            id: 4,
            XY: [59.667439, 56.315279],
            img1: "",
            img2: "",
            Name: "подсолнечник",
            HasTrees: false,
            S: 100,
        },
        {
            id: 4,
            XY: [59.072559, 54.342995],
            img1: "",
            img2: "",
            Name: "подсолнечник",
            HasTrees: false,
            S: 100,
        }

    ];
    // Open = (id) => {
    //     // let NewID = id;
    //     // this.styleAlert="flex";
    //     this.hisTrue = true
    // }
    hisTrue = false;

    _onButtonClick(event,id) {
        event.preventDefault();

        this.setState({
            ...this.state,
            showComponent: !this.state.showComponent,
            idDesc: this.state.idDesc = id,


        })
        console.log("button clicked", this.state.idDesc);
    }

    // this.Open(id)
    //                                 alert(
    //                                     el.HasTrees ? "Имеет деревья" : "без деревьев"
    //                                 )
    render() {
        return (
            <div className={style.container}>
                <YMaps>
                    <Map className={style.Map} defaultState={this.mapData}>
                        {this.ForestDescription.map((el, id) => <Placemark
                            key={id}
                            onClick={
                                (event) => this._onButtonClick(event,id)
                            }
                            geometry={el.XY}/>)}
                        {this.state.showComponent ? <AlertDescription idForest={this.state.idDesc}/> : null}


                        {/*   вывод полигона */}
                        <Polyline geometry={this.coordPolygon}
                                  options={{
                                      fillColor: '#6699ff',
                                      strokeColor: "#000000",
                                      strokeWidth: 5
                                  }}
                        />
                        <Polyline geometry={this.coordPolygon2}
                                  options={{
                                      fillColor: '#6699ff',
                                      strokeColor: "#000000",
                                      strokeWidth: 5
                                  }}
                        />
                    </Map>
                    {
                        this.hisTrue ?
                            <div className={style.AlertContainer}></div> :
                            <div className={style.loading}>
                                <img src={require("../../img/gif.gif")} alt="фокус"/>
                            </div>
                    }
                    {/*    <NavLink to='/description'>

                        </NavLink>
                */}
                </YMaps>
            </div>
        )
    }
};

export default YandexMap;