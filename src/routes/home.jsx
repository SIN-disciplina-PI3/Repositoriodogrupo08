import React from 'react';
import { UsergroupAddOutlined, AppstoreOutlined, MailOutlined, SmallDashOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';


const { Header, Content, Footer, Sider } = Layout;


    const items = [
      {
        key: '1',
        icon: <UsergroupAddOutlined />, 
        label: 'Cadastrar Empresa',
        onClick: () => window.location.href = '/cadastrar-empresa'
      },
        {
          key: '2',
          icon: <AppstoreOutlined />,
          label: 'Cadastrar Ong',
          onClick: () => window.location.href = '/cadastrar-ong'
        },
        {
          key: '3',
          icon: <MailOutlined />,
          label: 'Messages',
        },
        {
          key: '4',
          icon: <SmallDashOutlined />,
          label: 'Linha de tempo',
          onClick: () => window.location.href = '/linhadetempo'
        },
      ];
  

const Home = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
      </Sider>
      <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', padding: 70, background: '#d3d3d3' }}>
          <img src="/imagem1.jpeg" alt="Logo" className="logo" />
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <div
            style={{
              padding: 350,
              minHeight: 360,
              background: '#d3d3d3',
              borderRadius: borderRadiusLG,
            }}
          >
            
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Grupo 08 ©{new Date().getFullYear()} Created by FomeZero Connect
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Home;
