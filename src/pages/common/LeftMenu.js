import React, { useState } from "react"
import { Menu, Layout } from "antd"

import { NavLink, useLocation } from "react-router-dom"
import { routes } from "../../routes"
import classes from "./common.module.css"

const { Sider } = Layout

const RenderIcon = ({ Icon }) => <Icon />

const LeftMenu = (props) => {
  const location = useLocation()

  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = (collapsed) => {
    setCollapsed(collapsed)
  }

  return (
    <Sider
      width={200}
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{ minHeight: "94vh" }}
    >
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[`/${location.pathname.split("/")[1]}`]}
        defaultOpenKeys={routes.map((route) => route.title)}
        style={{ maxHeight: "94vh" }}
        className={classes.menu}
      >
        {routes.map((route) => (
          <Menu.SubMenu
            key={route.title}
            title={
              <span>
                <RenderIcon Icon={route.Icon} />
                <span>{route.titleWithLocale || route.title}</span>
              </span>
            }
          >
            {route.children ? (
              route.children.map((routeItem) => (
                <Menu.Item key={routeItem.path}>
                  <NavLink to={routeItem.path}>
                    <span>{routeItem.titleWithLocale || routeItem.title}</span>
                  </NavLink>
                </Menu.Item>
              ))
            ) : (
              <Menu.Item key={route.path}>
                <NavLink to={route.path}>
                  <span>{route.title}</span>
                </NavLink>
              </Menu.Item>
            )}
          </Menu.SubMenu>
        ))}
      </Menu>
    </Sider>
  )
}

export default LeftMenu
