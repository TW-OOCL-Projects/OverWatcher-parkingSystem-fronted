import React, {Component} from 'react';
import {Col, Icon, Input, message, Modal, Radio, Select, Table} from 'antd';

const Option = Select.Option;
const Search = Input.Search;
const RadioGroup = Radio.Group;

export default class Orders extends Component {
    state = { visible: false,selected:"type",orderId:0,parkingBoyId: 0};
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
        }, {
            title: '车牌号',
            dataIndex: 'carId',
            key: 'carId',
        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: '状态',
            dataIndex: 'status',
            key: 'status',
        }, {
            title: '操作',
            key: 'command',
            render: (text, record) => {
                if (record.command === "无人处理") {
                    return (
                        <a onClick={() => this.assign(record.id)}>指派</a>
                    )
                }
            },
        }];
        this.datas  = { dataSource:(this.props.orders).map((order, index) => {
            const {id, carId, type, status} = order;
            return {key: index, id, carId, type, status, command: status}
        })};
        console.log(this.datas);
    }
    handleOk = (e) => {
        console.log(this.state.parkingBoyId);
        console.log(e);
        this.props.assignfinish(this.state.orderId,this.state.parkingBoyId);
        this.setState({
            visible: false,
        });
    };
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    assign = (id) => {
        this.setState({
            visible: true,
            orderId:id
        });
        this.props.handle(id);
    };
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            parkingBoyId: e.target.value
        });
    };
    render() {
        const datas = (this.props.orders).map((order, index) => {
            const {id, carId, type, status} = order;
            return {key: index, id, carId, type, status, command: status}
        });
        const list = (this.props.list).map((parkingBoy,index)=>{
            const {id,name} = parkingBoy;
            return {key:index,id,name}
        });
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        let parkingList = list.map(boy =>{
            return <Radio style={radioStyle} value={boy.id}>{boy.name}</Radio>
            }
        );
        const columns = this.columns;
        return (
            <div>
                <Modal
                    title="停车员列表"
                    visible={this.state.visible}
                    onOk={(e)=>{this.handleOk(e)}}
                    onCancel={this.handleCancel}
                >
                    <p>
                        <RadioGroup onChange={this.onChange}>
                            {parkingList}
                        </RadioGroup>
                    </p>
                </Modal>
                <Col span={204} style={{textAlign: "right"}}>
                    <Select defaultValue="类型" style={{width: 120}} onChange={value=>{this.setState({selected:value})}}>
                        <Option value="type">类型</Option>
                        <Option value="status">状态</Option>
                        {/*<Option value="id">Id</Option>*/}
                    </Select>&nbsp;&nbsp;
                    <Search prefix={<Icon type="search" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            onSearch={value => this.selectedByConditions(value,this.state.selected)} style={{width: 200}} enterButton="搜索"/>
                </Col>
                <Table bordered columns={columns} dataSource={datas} style={{marginTop: "20px"}}/>
            </div>
        );
    }
    selectedByConditions(value, selected) {
        if(value===""){
            message.error('请输入搜索条件！',2);
        }else{
            this.props.selectedByValue(value,selected);
        }
    }
}