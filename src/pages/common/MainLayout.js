import React from "react"
import { Layout } from "antd"
import LeftMenu from "./LeftMenu"
import { routes } from "../../routes"
import { Route } from "react-router-dom"

const { Header, Content } = Layout

const MainLayout = (props) => {
  const renderSubRoutes = (route) => {
    const { children, ...item } = route
    const newRouteChildren =
      item.component && item.path ? [item, ...children] : children
    return newRouteChildren.map((routeChildren) => {
      return routeChildren.children ? (
        renderSubRoutes(routeChildren)
      ) : (
        <Route key={routeChildren.title} {...routeChildren} />
      )
    })
  }

  return (
    <Layout>
      <Header
        style={{
          height: "6vh",
          color: "red",
          fontFamily: "fangsong",
          fontSize: "16px",
        }}
      >
        <span> I love you forever </span>
      </Header>
      <Layout>
        <LeftMenu width={200}></LeftMenu>
        <Layout>
          <Content>
            {routes.map((route) => {
              return route.children ? (
                renderSubRoutes(route)
              ) : (
                <Route key={route.title} {...route} />
              )
            })}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default MainLayout
