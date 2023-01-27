import React, { useEffect, useState } from "react";
import { Button, Space, Table } from 'antd';
import { EditFilled, StarFilled, DeleteFilled } from '@ant-design/icons';

// Components
import MainBanner from "../../../components/MainBanner";

export default function PostsList({ posts }) {

  // Posts Data
  const lists = posts.data;

  // States
  const [list, setList] = useState(lists);

  // useEffect(() => {
  //   postList();
  // });

  // const postList = async () => {
  //   let results = await fetch(`/api/post`, {
  //     method: "GET",
  //     headers: {
  //       'Content-Type': 'application/json',
  //       // 'token': user?._id?.toString()
  //     },
  //     // body: JSON.stringify(data)
  //   });

  //   console.log(await results);

  //   return await results;
  // }

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text) => <Button type="link" className="pd-0 f-w-5">{text}</Button>,
    },
    {
      title: 'Content',
      dataIndex: 'content',
      key: 'content',
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
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
          <Button type="primary" ghost icon={<EditFilled />} />
          <Button type="warning" ghost icon={<StarFilled />} />
          <Button type="success" ghost icon={<StarFilled />} />
          <Button type="danger" ghost icon={<DeleteFilled />} /> 
        </Space>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      title: 'John Brown',
      content: 32,
      createdAt: 'New York No. 1 Lake Park',
      updatedAt: "12/12/2022",
      createdBy: 'arslan',
    },
    {
      key: '2',
      title: 'Jim Green',
      content: 42,
      createdAt: 'London No. 1 Lake Park',
      updatedAt: "12/12/2022",
      createdBy: 'arslan',
    },
    {
      key: '3',
      title: 'Joe Black',
      content: 32,
      createdAt: 'Sidney No. 1 Lake Park',
      updatedAt: "12/12/2022",
      createdBy: 'arslan',
    },
  ];

  console.log(list);
  console.log("list", list[14]._id);

  return (
    <div className="posts-list-page">
      {/* Main Banner */}
      <MainBanner title='Posts List' />
      {/* Main Banner End */}
      {/* Posts List Content */}
      <section className="posts-list-content">
        <div className="container">
          <div className="table-h">
            <Table columns={columns} dataSource={data} className="table" />
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
