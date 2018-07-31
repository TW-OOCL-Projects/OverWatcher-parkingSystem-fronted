import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';

const columns = [{
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    render: text => <a href="javascript:;">{text}</a>,
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
        <a href="javascript:;" className="ant-dropdown-link">修改 </a>
        <Divider type="vertical" />
        <a href="javascript:;">冻结</a>
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
        return(
            <Table columns={columns} dataSource={data} /> 
        );
    }
}