import React, {Component} from 'react';
import {Table, Input, Select, Col, Icon, Popconfirm, Modal,Radio} from 'antd';
import index from "../reducers";

const Option = Select.Option;
const Search = Input.Search;
const RadioGroup = Radio.Group;

export default class Orders extends Component {
    state = { visible: false}
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
                        <button onClick={() => this.assign(record.id)}>指派</button>
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
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    assign = (id) => {
        this.setState({
            visible: true,
        });
        const datas = this.datas.dataSource;
        this.props.handle(id);
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    render() {
        const list = (this.props.list).map((parkingBoy,index)=>{
            const {id,name} = parkingBoy;
            return {key:index,id,name}
        })
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        let parkingList = list.map(boy =>{
            return <Radio style={radioStyle} value={boy.id}>{boy.name}</Radio>
            }
        )
        const datas= this.datas.dataSource;
        const columns = this.columns;
        let selected = "type";
        return (
            <div>
                <Modal
                    title="停车员列表"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>
                        <RadioGroup onChange={this.onChange}>
                            {parkingList}
                        </RadioGroup>
                    </p>
                </Modal>
                <Col span={204} style={{textAlign: "right"}}>
                    <Select defaultValue="Type" style={{width: 120}} onChange={value=>selected=value}>
                        <Option value="type">Type</Option>
                        <Option value="status">Status</Option>
                        <Option value="id">id</Option>
                    </Select>&nbsp;&nbsp;
                    <Search prefix={<Icon type="search" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            onSearch={value => this.selectedByConditions(value,selected)} style={{width: 200}} enterButton="搜索"/>
                </Col>
                <Table bordered columns={columns} dataSource={datas} style={{marginTop: "20px"}}/>
            </div>
        );
    }

    selectedByConditions(value, selected) {
        if(value===""){
            alert("请输入文本");
        }else{
            this.props.selectedByValue(value,selected);
        }
    }
}