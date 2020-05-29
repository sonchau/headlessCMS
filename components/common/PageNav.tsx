import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, MailOutlined, AppstoreOutlined, SettingOutlined} from '@ant-design/icons';
import Link from 'next/link';
import { GraphQLClient } from 'graphql-request';
const { SubMenu } = Menu;
import { GetStaticProps, GetStaticPaths } from 'next'


// export const getStaticProps: GetStaticProps = async () => {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }




const PageNav = ({navs}) => {
    console.log('navs 111', navs)
    function handleClick(e) {
      console.log('click', e);
    }

    return (
      <Menu onClick={handleClick} style={{ width: 256 }} mode="vertical">
        <SubMenu key="sub1" icon={<MailOutlined />} title="Population">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="1"><Link href="/population-summary"> Population Summary</Link></Menu.Item>
            <Menu.Item key="2"><Link href="/[client]/population-estimates" as="/client/population-estimates"> Population estimates</Link></Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Iteom 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <AppstoreOutlined />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>
    )
}

export const getStaticProps: GetStaticProps = async () => {
  console.log('start 11')
  const graphcms = new GraphQLClient(
    'https://api-ap-northeast-1.graphcms.com/v2/ckaolt0ej0mfr01z1993obz3m/master'
  );

  const { navs } = await graphcms.request(
    `
    navs {
      title
      link
      parent
      extend
    }
    `
  );

  const response =  {
    props: {
      navs,
    },
  };
  console.log('response', response)
 
  return response
}
export default PageNav