import React from "react";
import { Row, Col, Button, Checkbox, Form, Input } from "antd";
// import { Editor } from "react-draft-wysiwyg";

// Components
import MainBanner from "../../components/MainBanner";

// Styles
// import 'draft-js/dist/Draft.css';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function NewPost() {
  return (
    <div className="new-post-page">
      {/* Main Banner */}
      <MainBanner title='Add New Post' />
      {/* Main Banner End */}
      {/* New Post Content */}
      <section className="new-post-sec">
        <div className="container">
          <Row gutter={[30, 30]}>
            <Col xs={24} lg={8}>
              <aside className="new-post-aside">
                <h3 className="title">Publish</h3>
              </aside>
            </Col>
            <Col xs={24} lg={16}>
              <div className="new-post-content">
                <Form
                  name="basic"
                  labelCol={{span: 8,}}
                  wrapperCol={{span: 16,}}
                  initialValues={{remember: true,}}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your title!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Content"
                    // name="content"
                    hasFeedback
                  >
                    {/* <Editor
                      wrapperClassName="email-wrapper"
                      editorClassName="email-editor-content"
                      editorStyle={{ border: "1px solid #E3E8F1", borderRadius: '4px', padding: '5px', height: '200px' }}
                      // toolbarCustomButtons={[<Placeholders/>]}
                    /> */}
                  </Form.Item>

                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary" htmlType="submit">
                      Save Post
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* New Post Content End */}
    </div>
  )
}
