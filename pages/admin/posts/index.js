import React, { useEffect, useState } from "react";
import { Button, Popconfirm, Space, Table, Tooltip } from 'antd';
import { EditFilled, StarFilled, DeleteFilled } from '@ant-design/icons';
import moment from 'moment';
import { useRouter } from "next/router";

// Utils
import { Post, Get } from "../../../utils/helpers";

const PostsList = ({ notify, posts }) => {

  // Posts Data
  const lists = posts.data;

  // States
  const [list, setList] = useState(lists);
  const [edit, setEdit] = useState(false);
  const [isPublished, setIsPublished] = useState(false);
  const [isStarred, setIsStarred] = useState(false);

  // Router
  const router = useRouter();

  useEffect(() => {
    // The post changed!
  }, [router.query.post]);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <Button type="link" className="pd-0 f-w-5">{text}</Button>,
    },
    {
      title: 'Content',
      dataIndex: 'description',
      key: 'description',
      width: '280px',
    },
    {
      title: 'Created At',
      dataIndex: 'publishedAt',
      key: 'publishedAt',
      render: (text) => moment(text).format('LLL'),
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      render: (text) => text && moment(text).format('LLL'),
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
      width: '150px',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Tooltip title="Edit Post" placement="topRight">
            <Button type="primary" ghost icon={<EditFilled />} onClick={() => editPost(record)} />
          </Tooltip>
          <Tooltip title="Publish Post" placement="topRight">
            <Button type="warning" ghost={record?.isPublished} icon={<StarFilled />} onClick={() => publishedPost(record)} />
          </Tooltip>
          <Tooltip title="Favorite Post" placement="topRight">
            <Button type="success" ghost={record?.isStarred} icon={<StarFilled />} onClick={() => starredPost(record)} />
          </Tooltip>
          <Popconfirm
            placement="rightTop"
            title="Are you sure you want to delete this post!"
            onConfirm={() => deletePost(record?._id)}
            okText="Yes"
            cancelText="No"
          >
            <Tooltip title="Delete Post" placement="topRight">
              <Button type="danger" ghost icon={<DeleteFilled />} /> 
            </Tooltip>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const editPost = async (record) => {  
    setEdit(true);

    if (edit) {
      router.push({
        pathname: `/admin/posts/new`,
        query: { id: record._id },
        shallow: true,
      });
    }
  };

  const deletePost = async (record) => {
    const { success, message } = await Post({ path: '/post/delete', data: record, method: 'DELETE' })

    if (success) {
      notify("Successfull", message, 'success');
    } else {
      notify("Error", message, 'error');
    }
  };

  const publishedPost = async (record) => {
    setIsPublished(!isPublished);

    record['isPublished'] = isPublished;
    const published = await Post({ path: '/post/update', data: record, method: 'POST' });
  };

  const starredPost = async (record) => {
    setIsStarred(!isStarred);

    record['isStarred'] = isStarred;
    const starred = await Post({ path: '/post/update', data: record, method: 'POST' });
  };

  return (
    <div className="posts-list-page">
      {/* Main Banner */}
      <div className="main-banner new-post-banner">
        <div className="container">
          <div className="caption">
            <h1 className="title">Posts</h1>
          </div>
        </div>
      </div>
      {/* Main Banner End */}
      {/* Posts List Content */}
      <section className="posts-list-content">
        <div className="container">
          <div className="table-h">
            <Table columns={columns} dataSource={list} className="table" />
          </div>
        </div>
      </section>
      {/* Posts List Content End */}
    </div>
  )
};

export default PostsList;

export async function getServerSideProps() {
  const posts = await Get('post');
  return {
    props: { posts } // props will be passed to the page
  };
}
