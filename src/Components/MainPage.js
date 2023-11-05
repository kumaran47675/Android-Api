import { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  FormOutlined,
  SnippetsOutlined,
  FileImageOutlined,
} from '@ant-design/icons';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Layout, Menu, Button, theme } from 'antd';
import Tinting from './Forms/TintingBanco.js';
import NipponLogo from '../Assets/Nipponlogo1.png';
import ColourantBanco from './Forms/ColourantBanco';
import Observation from './Forms/Observation';

import TintingTable from './TintingTable.js';

const { Header, Sider, Content } = Layout;

const MainPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'User',
      linkTo: '/user',
    },
    {
      key: '2',
      icon: <FormOutlined />,
      label: 'Observation',
      linkTo: '/observation',
    },
    {
      key: '3',
      icon: <FormOutlined />,
      label: 'TintingBanco',
      linkTo: '/tinting',
    },
    {
      key: '4',
      icon: <FormOutlined />,
      label: 'ColourantBangalore',
      linkTo: '/colourant',
    },
    {
      key: '5',
      icon: <FormOutlined />,
      label: 'TintingNoombal',
    },
    {
      key: '6',
      icon: <FormOutlined />,
      label: 'ColourantNoombal',
    },
    {
      key: '7',
      icon: <SnippetsOutlined />,
      label: 'Report',
      linkTo: '/viewreport',
    },
    {
      key: '8',
      icon: <FileImageOutlined />,
      label: 'Image',
    },
  ];

  return (
    <Router>
      <Layout style={{ height: 'calc(100vh)' }}>
        <Sider trigger={null} collapsible collapsed={collapsed} width="265px">
          {collapsed ? (
            <img
              className="logo"
              title="Nippon Paint India"
              src={NipponLogo}
              style={{ height: '60px', width: '60px' }}
              alt="Nippon Paint India"
            />
          ) : (
            <img
              className="logo"
              title="Nippon Paint India"
              src="https://www.nipponpaint.co.in/wp-content/uploads/2021/08/Nippon-Logo-11-01-01.png"
              alt="Nippon Paint India"
            />
          )}

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {menuItems.map((item) => (
              <Menu.Item key={item.key}>
                <Link to={item.linkTo}>
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                width: 64,
                height: 64,
                float: 'left',
              }}
            />

            <p className="hellouser" style={{ float: 'right', fontSize: 24, margin: 0, paddingRight: 10 }}>
              Hello Pavan
            </p>
          </Header>
          <Content
            className="MainPageContent"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              maxHeight: 'calc(100vh - 48px)',
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route exact path="/user" element={<TintingTable />} />
              {/* <Route path="/viewreport" element={<Report />} /> */}
              <Route path="/observation" element={<Observation />} />
              <Route path="/tinting" element={<Tinting />} />
              <Route path="/colourant" element={<ColourantBanco />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default MainPage;
