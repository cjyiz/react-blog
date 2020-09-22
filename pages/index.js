import React, { useState } from 'react'
import Head from 'next/head'
import { Button, Row, Col, List } from 'antd'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import Detailed from './detailed'
import Axios from 'axios'
import '../static/style/pages/index.css'
const Home = (list) => {
  const [mylist, setMylist] = useState(list.data)
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">
                    <Link href={{ pathname: '/detailed', query: { id: item.id } }}>
                      <a>{item.title}</a>
                    </Link>
                    {item.title}
                  </div>
                  <div className="list-icon">
                    <span> {item.addTime}</span>
                    <span> {item.typeName}</span>
                    <span> {item.view_count}人</span>
                  </div>
                  <div className="list-context">{item.introduce}</div>
                </List.Item>
              )}
            />

          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}


// Home.getInitialProps = async (ctx) => {
//   console.log('这是什么情况')
//   const res = await fetch('https://api.github.com/repos/vercel/next.js')
//   const json = await res.json()
// }

Home.getInitialProps = async () => {
  console.log('这里指行了嘛')
  const promise = new Promise(resolve => {
    Axios('http://127.0.0.1:7001/default/getArticleList').then(
      res => {
        console.log('这是远程获取的数据', res)
        resolve(res.data)
      }
    )
  })
  return await promise
}
export default Home