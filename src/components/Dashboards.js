import React, { Component } from 'react';
import { Card, Col, Row,Progress } from 'antd';
import {createStore} from "redux";
import rootReducer from "../reducers";
import DashBoardsApi from "../API/DashBoardsApi";

export default class Dashboards extends Component{
    render(){
        const datas=(this.props.DashBoardsparkingLots).map((lot,index)=>{
            const {parkingLotName,size,initSize,parkingBoyName}=lot
            return {key:index ,parkingLotName,size,initSize,parkingBoyName}
        });

        // function handleChange(value) {
        //     console.log(`selected ${value}`);
        // }
        const store = createStore(rootReducer)
        DashBoardsApi.init(store.dispatch);
        return(
            <div>
                <Row gutter={16}>
                {datas.map(item =>
                    <Col span={8}>
                        <Card title={item.parkingLotName}>
                            <Row>
                                <Col span={12}>
                                    <Progress
                                        type="dashboard"
                                        format={() => `${item.size}/${item.initSize}`}
                                        percent={(item.size / item.initSize) * 100}/>
                                </Col>
                                <Col span={12}>
                                    停车员：{item.parkingBoyName}
                                </Col>
                            </Row>
                            <Col span={12}><b><br/>停车情况</b></Col>
                        </Card>
                    </Col>)}
                </Row>
            </div>
        );
    }
}