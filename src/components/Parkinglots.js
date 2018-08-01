import React, { Component } from 'react';
import { Table, Divider,Button,Input, Select,Row, Col,Icon} from 'antd';

const Option = Select.Option;

const Search = Input.Search;

const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: text => <a >{text}</a>,
}, {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '大小',
    dataIndex: 'size',
    key: 'size',
},{
    title: '操作',
    key: 'command',
    render: (text, record) => (
        <span>
        <a  className="ant-dropdown-link">修改 </a>
        <Divider type="vertical" />
        <a >关闭</a>
        </span>
    ),
}];

const data = [{
    key: '1',
    id: '',
    name: '停车场A',
    size: '10',
},{
    key: '2',
    id: '',
    name: '停车场B',
    size: '5',
}];

export default class Parkinglots extends Component{
    render(){
        function handleChange(value) {
            console.log(`selected ${value}`);
        }
        return(
            <div>
                <Row>
                    <Col span={4} style={{textAlign:"left"}}><Button onClick={this.handleAdd} type="primary"> 新 建 </Button></Col>
                    {/* <Col span={8}></Col> */}
                    <Col span={16} offset={4} style={{textAlign:"right"}}>
                        <Select defaultValue="name" style={{ width: 120 }} onChange={handleChange}>
                            <Option value="email">Email</Option>
                            <Option value="name">Name</Option>
                            <Option value="phone">Phone</Option>
                        </Select>&nbsp;&nbsp;
                        <Search prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onSearch={value => console.log(value)} style={{ width: 200 }} enterButton="搜索"/>
                    </Col>
                </Row>
                <Table bordered columns={columns} dataSource={data} style={{marginTop:"20px"}}/>
            </div>
        );
    }
}