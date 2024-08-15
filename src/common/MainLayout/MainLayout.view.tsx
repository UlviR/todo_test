import { Layout, Menu, Breadcrumb, theme } from "antd";
// import Sider from "antd/es/layout/Sider";
import { PaperClipOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import React, { PropsWithChildren, useState } from "react";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[]
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [getItem("TODO", "1", <PaperClipOutlined />)];
const MainLayoutView: React.FC<PropsWithChildren> = ({ children }) => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();
	return (
		<Layout style={{ minHeight: "100vh" }}>
			<Sider
				collapsible
				collapsed={collapsed}
				onCollapse={(value) => setCollapsed(value)}
			>
				<div className="demo-logo-vertical" />
				<Menu
					theme="dark"
					defaultSelectedKeys={["1"]}
					mode="inline"
					items={items}
				/>
			</Sider>
			<Layout>
				<Header style={{ padding: 0, background: colorBgContainer }} />
				<Content style={{ margin: "0 16px" }}>
					<Breadcrumb style={{ margin: "16px 0" }}>
						<Breadcrumb.Item>TODO</Breadcrumb.Item>
						<Breadcrumb.Item>Tasks</Breadcrumb.Item>
					</Breadcrumb>
					<div
						style={{
							padding: 24,
							minHeight: 360,
							background: colorBgContainer,
							borderRadius: borderRadiusLG,
						}}
					>
						{children}
					</div>
				</Content>
				<Footer style={{ textAlign: "center" }}>
					TODO APP for MindBox ©{new Date().getFullYear()} Created by Ulvi Rzazade
				</Footer>
			</Layout>
		</Layout>
	);
};

export default MainLayoutView;
