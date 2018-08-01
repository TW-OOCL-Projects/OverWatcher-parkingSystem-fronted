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
    dataIndex: 'command',
    key: 'command',
    render: (text, record) => (
      <span>
        <a  className="ant-dropdown-link">修改 </a>
        <Divider type="vertical" />
        <a >冻结</a>
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
      command:''
  },{
    key: '1',
    id: '',
    name: 'EmployeeName',
    email: 'email',
    phone: '13000000000',
    position: 'manager',
      command:''
  },{
    key: '1',
    id: '',
    name: 'EmployeeName',
    email: 'email',
    phone: '13000000000',
    position: '',
      command:''
  },{
    key: '1',
    id: '',
    name: 'EmployeeName',
    email: 'email',
    phone: '13000000000',
    position: '',
      command:''
  },{
      key: '1',
      id: '',
      name: 'EmployeeName',
      email: 'email',
      phone: '13000000000',
      position: '',
      command:''
  },{
      key: '1',
      id: '',
      name: 'EmployeeName',
      email: 'email',
      phone: '13000000000',
      position: '',
      command:''
  },{
      key: '1',
      id: '',
      name: 'EmployeeName',
      email: 'email',
      phone: '13000000000',
      position: '',
      command:''
  }];

export default class Employees extends Component{
    render(){
      function handleChange(value) {
        console.log(`selected ${value}`);
      }
        return(
          <div>
             <Row>
               <Col span={4} style={{textAlign:"left"}}><Button type="primary"> 新 建 </Button></Col>
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