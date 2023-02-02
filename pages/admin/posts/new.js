import React, { useState, useEffect } from "react";
import { Row, Col, Button, Checkbox, Form, Input, DatePicker, message, Upload } from "antd";
import { InboxOutlined } from '@ant-design/icons';
// import { Editor, EditorState } from 'draft-js';
// import { Editor } from "react-draft-wysiwyg";
import moment from "moment";
import { useRouter } from "next/router";
import qs from 'qs';

// Helper
import Post from '../../../helpers/post';

// Styles
// import 'draft-js/dist/Draft.css';
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const { TextArea } = Input;
const { Dragger } = Upload;

const options = [
  { label: 'Heading 1 (h1)', value: '1' },
  { label: 'Heading 2 (h2)', value: '2' },
  { label: 'Heading 3 (h3)', value: '3' },
  { label: 'Heading 4 (h4)', value: '4' },
  { label: 'Heading 5 (h5)', value: '5' },
  { label: 'Heading 6 (h6)', value: '6' },
];

const NewPost = ({ notify }) => {

  const router = useRouter();
  const id = router?.query?.id;

  // Form
  const [form] = Form.useForm();
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    document.getElementById('user-name').innerHTML = user?.email ? user?.email : 'Add User';
  }, []);

  useEffect(() => {
    const { id } = qs.parse(window.location.search, { ignoreQueryPrefix: true });
    if (id) {
      let data = {};
      data['postId'] = id;
      data['getPost'] = true;
      console.log("data new", data);
      (async () => {
        const { success, message, post } = await getPost(data);
        // const { success, message, post } = await Post({ path: 'post', data: data, method: 'POST' });
        if (success) {
          post['publishedAt'] = moment(post.publishedAt);
          form.setFieldsValue(post);
        } else {
          notify('Error', message, 'error');
        }
      })();
    }
  });

  const getPost = async (data) => {
    const user = JSON.parse(localStorage.getItem('user'));
    let results = await fetch(`/api/post`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'token': user?._id?.toString()
      },
      body: JSON.stringify(data)
    });

    return await results.json();
  };

  const updatePost = async (data) => {
    const user = JSON.parse(localStorage.getItem('user'));
    let results = await fetch(`/api/post/update`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'token': user?._id?.toString()
      },
      body: JSON.stringify(data)
    });

    return await results.json();
  };

  const createPost = async (data) => {
      const user = JSON.parse(localStorage.getItem('user'));
      let results = await fetch(`/api/post/create`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'token': user?._id?.toString()
        },
        body: JSON.stringify(data)
      });

      return await results.json();
  }

  // const createPost = async (data) => {
  //   // if (id) {
  //   //   Post({ path: 'post', data, method: 'POST' });
  //   //   console.log("dada", Post().data);
  //   // } else {
  //   //   Post({ path: 'post/posts', data, method: 'POST' });
  //   // }
  //   if (id) {
  //     const user = JSON.parse(localStorage.getItem('user'));
  //     let results = await fetch(`/api/post`, {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'token': user?._id?.toString()
  //       },
  //       body: JSON.stringify(data)
  //     });

  //     return await results.json();
  //   } else {
  //     const user = JSON.parse(localStorage.getItem('user'));
  //     let results = await fetch(`/api/post/create`, {
  //       method: "POST",
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'token': user?._id?.toString()
  //       },
  //       body: JSON.stringify(data)
  //     });

  //     return await results.json();
  //   }
  //   // const user = JSON.parse(localStorage.getItem('user'));
  //   // let results = await fetch(`/api/${id ? '/post' : '/post/posts' }`, {
  //   //   method: "POST",
  //   //   headers: {
  //   //     'Content-Type': 'application/json',
  //   //     'token': user?._id?.toString()
  //   //   },
  //   //   body: JSON.stringify(data)
  //   // });

  //   // return await results.json();
  // };

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
    values['publishedAt'] = moment(values.publishedAt).valueOf();

    if (id) {
      values["postId"] = id;
      const { success, message } = await updatePost(values);
        // const { success, message } = await Post({ path: '/path/update', data: data, method: 'POST' });
      console.log(success, message);
      if (success) {
        notify("Successfull", message, 'success');
      } else {
        notify("Error", message, 'error');
      }
    } else {
      const { success, message } = await createPost(values);
        // const { success, message } = await Post({ path: '/path/create', data: data, method: 'POST' });
      if (success) {
        notify("Successfull", message, 'success');
      } else {
        notify("Error", message, 'error');
      }
    }
  };

  return (
    <div className="new-post-page">
      {/* Main Banner */}
      <div className="main-banner new-post-banner">
        <div className="container">
          <div className="caption">
            <h1 className="title">{id ? 'Edit Post' : 'Add New Post'}</h1>
          </div>
        </div>
      </div>
      {/* Main Banner End */}
      {/* New Post Content */}
      <Form
        name="basic"
        labelCol={{span: 8}}
        wrapperCol={{span: 16}}
        autoComplete="off"
        form={form}
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
                        name="description"
                        rules={[
                          {
                            required: true,
                            message: 'Please input your description!',
                          },
                        ]}
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
                        name={['meta', 'title']}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Description"
                        name={['meta', 'description']}
                      >
                        <TextArea rows={4} />
                      </Form.Item>

                      <Form.Item
                        label="Focused keyword"
                        name={['meta', 'focusedKeywords']}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Canonical"
                        name={['meta', 'cononical']}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="noindex"
                        name={['meta', 'noIndex']}
                        valuePropName="checked"
                      >
                        <Checkbox></Checkbox>
                      </Form.Item>
                      <Form.Item
                        label="nofollow"
                        name={['meta', 'noFollow']}
                        valuePropName="checked"
                      >
                        <Checkbox></Checkbox>
                      </Form.Item>

                      <Form.Item
                        label="ALT Tag"
                        name={['meta', 'tags']}
                      >
                        <Input />
                      </Form.Item>

                      <Form.Item
                        label="Schema Markup"
                        name={['meta', 'markup']}
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
                        name={['facebookMeta', 'title']}
                      >
                        <Input />
                      </Form.Item>
    
                      <Form.Item
                        label="Facebook Description"
                        name={['facebookMeta', 'description']}
                      >
                        <TextArea rows={4} />
                      </Form.Item>
    
                      <Form.Item
                        label="Twitter Title"
                        name={['twitterMeta', 'title']}
                      >
                        <Input />
                      </Form.Item>
    
                      <Form.Item
                        label="Twitter Description"
                        name={['twitterMeta', 'description']}
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
                      <strong className="author-name" id="user-name">Arslan</strong>
                    </div>
                  </Col>
                  <Col xs={24}>
                    <div className="new-post-aside">
                      <h3 className="title">Headings:</h3>
                      <Form.Item
                        name="headings"
                        wrapperCol={{
                          span: 24,
                        }}
                        className="mr-0"
                      >
                        <Checkbox.Group options={options}  />
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
};

export default NewPost;
