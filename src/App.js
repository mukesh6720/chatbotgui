import React from "react";
import { Input, Button, Layout } from "antd";
import SendIcon from "@material-ui/icons/Send";
import "antd/dist/antd.css";
import "./style.css";
const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <div>
      <Layout>
        <Header>
          <center>
            <h1>College Enquiry Chatbot</h1>
          </center>
        </Header>
        <Content
          className="site-layout"
          style={{ padding: "0 50px", marginTop: 64 }}
        >
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 540 }}
          />
        </Content>
        <Footer>
          <div class="send">
            <Input placeholder="type here" />
            <Button>
              <SendIcon />
            </Button>
          </div>
        </Footer>
      </Layout>
    </div>
  );
}
