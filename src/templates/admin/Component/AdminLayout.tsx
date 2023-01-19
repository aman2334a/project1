import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminHeader from './AdminHeader';
// import './index.css';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
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

const AdminLayout: React.FC<{ element: React.ReactNode,title:any }> = ({ element,title }) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed}   breakpoint={'sm'}  collapsedWidth={50} width={200} onCollapse={(value) => setCollapsed(value)}>
            {/* <Header /> */}
                <div style={{ height: 32, margin: 16, }} >
                    {/* <img src='./assets/images/FTnew.png'/> */}
                </div>
                {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline"  >
                    <Menu.SubMenu title={
                        <span>
                           <PieChartOutlined />
                            <span>Reports</span>
                        </span>
                    }>
                        <Menu.Item><NavLink to="/admin/reports?view=ServiceWise">Service Wise</NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/admin/reports?view=CustomerWise">Customer Wise</NavLink></Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu title={
                        <span>
                            <UserOutlined />
                            <span>Portal Updates</span>
                        </span>
                    }>
                        <Menu.Item><NavLink to="/admin/updates?view=AddScheme">Add Schemes</NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/admin/updates?view=HotOffer">Hot Offer</NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/admin/updates?view=ServiceCategory">Services Category </NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/admin/updates?view=ServiceSubCategory">Services Sub-Category </NavLink></Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu title={
                        <span>
                            <TeamOutlined />
                            <span>Admin</span>
                        </span>
                    }>
                        <Menu.Item><NavLink to="/admin/manage?view=UserMangement">User Management</NavLink></Menu.Item>
                        <Menu.Item><NavLink to="/admin/manage?view=Payments">Payments</NavLink></Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header style={{ padding:0, background: colorBgContainer }}  >
                    <AdminHeader />
                    
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Admin</Breadcrumb.Item>
                        <Breadcrumb.Item>{title}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ padding: 10, minHeight: 360, background: colorBgContainer }} className='MainDiv'>
                        {element}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Copyright © 2023 Fintaxcial.</Footer>
            </Layout>
        </Layout>
    );
};

export default AdminLayout;