import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminHeader from '../../admin/Component/AdminHeader';
// import './index.css';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const UserLayout: React.FC<{ element: React.ReactNode,title:any }> = ({ element,title }) => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate=useNavigate()
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div style={{ height: 32, margin: 16, }} >
          {/* <img src='./assets/images/FTnew.png'/> */}
        </div>
        {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"  >
          <Menu.Item key="1">
            {/* <Icon type="user" /> */}
            <NavLink to='/Dashboard'><PieChartOutlined /><span>DashBoard</span></NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            {/* <Icon type="user" /> */}
            <NavLink to='/requests'><DesktopOutlined /><span>New Request</span></NavLink>
          </Menu.Item>
          <Menu.SubMenu title={
            <span>
              <UserOutlined />
              <span>Setting</span>
            </span>
          }>
            <Menu.Item><NavLink to='/Setting'>Profile</NavLink></Menu.Item>
            <Menu.Item
            onClick={()=>{
              localStorage.clear()
              navigate('/')
            }}
            >Logout</Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: colorBgContainer }} >
          {/* <img src='./assets/images/FTnew.png'/> */}
          <AdminHeader/>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
            <Breadcrumb.Item>{title}</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }} className={"mainDiv"}>
            {element}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Copyright © 2023 Fintaxcial.</Footer>
      </Layout>
    </Layout>
  );
};

export default UserLayout;