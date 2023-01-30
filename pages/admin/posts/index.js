import React, { useEffect, useState } from "react";
import { Button, Space, Table } from 'antd';
import { EditFilled, StarFilled, DeleteFilled } from '@ant-design/icons';
import moment from 'moment';
import { useRouter } from "next/router";
import qs from 'qs';

// Components
import MainBanner from "../../../components/MainBanner";

export default function PostsList({ posts }) {

  // Posts Data
  const lists = posts.data;

  // States
  const [list, setList] = useState(lists);
  const [edit, setEdit] = useState(false);

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
    },
    {
      title: 'Created By',
      dataIndex: 'createdBy',
      key: 'createdBy',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" ghost icon={<EditFilled />} onClick={() => editPost(record)} />
          <Button type="warning" ghost icon={<StarFilled />} />
          <Button type="success" ghost icon={<StarFilled />} />
          <Button type="danger" ghost icon={<DeleteFilled />} /> 
        </Space>
      ),
    },
  ];

  const editPost = async (record) => {  
    setEdit(true);
    console.log("record", record);

    if (edit) {
      router.push({
        pathname: `/admin/posts/new`,
        query: { id: record._id },
        shallow: true,
      });
    }
  };

  return (
    <div className="posts-list-page">
      {/* Main Banner */}
      <MainBanner title='Posts List' />
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

// export default PostsList;


export async function getStaticProps() {
  const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/post`);
  const posts = await res.json();

  return {
    props: { posts } // props will be passed to the page
  };
}
