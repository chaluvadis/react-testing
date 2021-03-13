import { Layout } from 'antd';
import UserComponent from "./containers/user/index";

const { Header, Sider, Content } = Layout;

function App() {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={false}>
        <div className="logo" style={{ height: "60px" }} />
        <UserComponent />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: "0px", color: "whitesmoke", fontSize: "1.5rem", fontWeight: 'bold', textAlign: "center" }} >
          User Profile
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          Content
          </Content>
      </Layout>
    </Layout>
  );
}

export default App;
