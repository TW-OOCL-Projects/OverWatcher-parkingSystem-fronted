import React, { Component } from 'react';
import { Table, Divider,Button,Input, Select,Row, Col} from 'antd';

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
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },{
    title: '电话号码',
    dataIndex: 'phone',
    key: 'phone',
  },{
    title: '职务',
    dataIndex: 'position',
    key: 'position',
  },{
    title: '操作',
    key: 'command',
    render: (text, record) => (
      <span>
        <a  className="ant-dropdown-link">修改 </a>
        <Divider type="vertical" />
        <a >冻结</a>
        <Divider type="vertical" />
        
      </span>
    ),
  }];
  
  const data = [{
    key: '1',
    id: '',
    name: 'EmployeeName',
    email: 'email',
    phone: '13000000000',
    position: 'manager',
    address: 'New York No. 1 Lake Park',
  },{
    key: '1',
    id: '',
    name: 'EmployeeName',
    email: 'email',
    phone: '13000000000',
    position: 'manager',
    address: 'New York No. 1 Lake Park',
  },{
    key: '1',
    id: '',
    name: 'EmployeeName',
    email: 'email',
    phone: '13000000000',
    position: '',
    address: 'New York No. 1 Lake Park',
  },{
    key: '1',
    id: '',
    name: 'EmployeeName',
    email: 'email',
    phone: '13000000000',
    position: '',
    address: 'New York No. 1 Lake Park',
  }];

export default class Employees extends Component{
    render(){
      function handleChange(value) {
        console.log(`selected ${value}`);
      }
        return(
          <div>
             <Row>
               <Col span={8}><Button onClick={this.handleAdd} type="primary">新建</Button></Col>
               {/* <Col span={8}></Col> */}
               <Col span={8}><Select defaultValue="name" style={{ width: 120 }} onChange={handleChange}>
            <Option value="email">email</Option>
            <Option value="name">name</Option>
            <Option value="phone">phone</Option>
            </Select>
            <Search onSearch={value => console.log(value)} style={{ width: 200 }} enterButton="搜索"/>
             </Col>
              </Row>  
            <Table bordered columns={columns} dataSource={data} />
          </div>
        );
    }
}