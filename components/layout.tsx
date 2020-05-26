import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import cn from 'classnames'
import {
  useRecoilValue,
} from 'recoil';

import ThemeSelect, {themeState} from './themeSelect'
import PageHeader from './common/PageHeader'
import PageNav from './common/PageNav'

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const name = '[Your Name]'
export const siteTitle = 'Next.js Sample Website'

export default function PageLayout({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) {
  const theme = useRecoilValue(themeState);
  return (
    <div className={cn(styles.container, {
      [styles.light]: theme==='light',
      [styles.dark]: theme==='dark'
    })}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="City Compass"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
    <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme={theme} mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        <Menu.Item key="4"><ThemeSelect /></Menu.Item>
      </Menu>
      
    </Header>
    <Layout style={{ padding: '3rem' }}>
      <Sider width={255} className="site-layout-background">
        <PageNav />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>

    </div>
  )
}
