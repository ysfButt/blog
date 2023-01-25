import React, { useState, useEffect } from "react";
import { Row, Col, Button, Checkbox, Form, Input, DatePicker, message, Upload } from "antd";
import { InboxOutlined } from '@ant-design/icons';
// import { Editor, EditorState } from 'draft-js';
// import { Editor } from "react-draft-wysiwyg";
import moment from "moment";

// Components
import MainBanner from "../../components/MainBanner";

// Styles
// import 'draft-js/dist/Draft.css';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const { TextArea } = Input;
const { Dragger } = Upload;

export default function NewPost() {

  // useEffect(() => {
  //   postList({ title: 'first post' });
  // }, []);

  const postList = async (data) => {
    let results = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    results = await results.json();

    console.log(results, data);

    return results;
  }

  // const [editorState, setEditorState] = useState(
  //   () => EditorState.createEmpty(),
  // );

  const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const onFinish = async (values) => {
    const posts = await postList(values);
    console.log('Success:', values, posts);

    const text = values['publishedAt'] = moment(values.publishedAt).valueOf();
    console.log(text);
  };

  return (
    <div className="new-post-page">
      {/* Main Banner */}
      <MainBanner title='Add New Post' />
      {/* Main Banner End */}
      {/* New Post Content */}
      <Form
        name="basic"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        initialValues={{remember: true}}
        autoComplete="off"
        onFinish={onFinish}
      >
        <section className="new-post-sec">
          <div className="container">
            <Row gutter={[40, 40]}>
              <Col xs={24} lg={16}>
                <Row gutter={[40, 40]}>
                  <Col xs={24}>
                    <div className="new-post-content">
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
                        name="content"
                        className="mr-0"
                      >
                        <TextArea rows={4} />
                        {/* <Editor 
                          wrapperClassName="email-wrapper"
                          editorClassName="email-editor-content"
                          // editorStyle={{ border: "1px solid #E3E8F1", borderRadius: '4px', padding: '5px', height: '200px' }}
                          // toolbarCustomButtons={[<Placeholders/>]}
                          editorState={editorState} 
                          onChange={setEditorState} 
                        /> */}
                      </Form.Item>

                    </div>
                  </Col>
                  <Col xs={24}>
                    <div className="new-post-content">
                      <h3 className="title">Meta:</h3>
                      <Form.Item
                        label="Title"
                        name="meta.title"
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Description"
                        name="meta.description"
                      >
                        <TextArea rows={4} />
                      </Form.Item>

                      <Form.Item
                        label="Focused keyword"
                        name="meta.focusedKeywords"
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Canonical"
                        name="meta.cononical"
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="noindex"
                        name="meta.noIndex"
                        valuePropName="checked"
                      >
                        <Checkbox></Checkbox>
                      </Form.Item>
                      <Form.Item
                        label="nofollow"
                        name="meta.noFollow"
                        valuePropName="checked"
                      >
                        <Checkbox></Checkbox>
                      </Form.Item>

                      <Form.Item
                        label="ALT Tag"
                        name="meta.tags"
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Schema Markup"
                        name="meta.markup"
                        valuePropName="checked"
                      >
                        <Checkbox></Checkbox>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col xs={24}>
                    <div className="new-post-content">
                      <h3 className="title">Social Media Meta:</h3>
                      <Form.Item
                        label="Facebook Title"
                        name="facebookMeta.title"
                      >
                        <Input />
                      </Form.Item>
    
                      <Form.Item
                        label="Facebook Description"
                        name="facebookMeta.description"
                      >
                        <TextArea rows={4} />
                      </Form.Item>
    
                      <Form.Item
                        label="Twitter Title"
                        name="twitterMeta.title"
                      >
                        <Input />
                      </Form.Item>
    
                      <Form.Item
                        label="Twitter Description"
                        name="twitterMeta.description"
                      >
                        <TextArea rows={4} />
                      </Form.Item>
    
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} lg={8}>
                <Row gutter={[40, 40]}>
                  <Col xs={24}>
                    <div className="new-post-aside">
                      <Form.Item
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Button type="primary" block htmlType="submit">
                          Publish
                        </Button>
                      </Form.Item>
                      <Form.Item
                        label="Published At"
                        name="publishedAt"
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <DatePicker />
                      </Form.Item>
                      <h3 className="title publish-title">Publish By:</h3>
                      <strong className="author-name">Arslan</strong>
                    </div>
                  </Col>
                  <Col xs={24}>
                    <div className="new-post-aside">
                      <h3 className="title">Headings:</h3>
                      <Form.Item
                        name="headings"
                        valuePropName="checked"
                        wrapperCol={{
                          span: 24,
                        }}
                        className="mr-0"
                      >
                        <Checkbox.Group className="w-100">
                          <Row gutter={[15, 15]}>
                            <Col span={24}>
                              <Checkbox value="1">Heading 1 (h1)</Checkbox>
                            </Col>
                            <Col span={24}>
                              <Checkbox value="2">Heading 2 (h2)</Checkbox>
                            </Col>
                            <Col span={24}>
                              <Checkbox value="3">Heading 3 (h3)</Checkbox>
                            </Col>
                            <Col span={24}>
                              <Checkbox value="4">Heading 4 (h4)</Checkbox>
                            </Col>
                            <Col span={24}>
                              <Checkbox value="5">Heading 5 (h5)</Checkbox>
                            </Col>
                            <Col span={24}>
                              <Checkbox value="6">Heading 6 (h6)</Checkbox>
                            </Col>
                          </Row>
                        </Checkbox.Group>
                      </Form.Item>
                    </div>
                  </Col>
                  <Col xs={24}>
                    <div className="new-post-aside">
                      <Form.Item
                        label="Featured Image"
                        // name="featuredImageUrl"
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                      >
                        <Dragger {...props}>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">Click or drag file to upload</p>
                        </Dragger>
                      </Form.Item>
                      <Form.Item
                        label="Excerpt"
                        name="excerpt"
                        labelCol={{
                          span: 24,
                        }}
                        wrapperCol={{
                          span: 24,
                        }}
                        className="mr-0"
                      >
                        <TextArea rows={4} />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </section>
      </Form>
      {/* New Post Content End */}
    </div>
  )
}
