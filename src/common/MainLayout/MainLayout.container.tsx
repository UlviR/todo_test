import React, { PropsWithChildren } from "react";
import MainLayoutView from "./MainLayout.view";

const MainLayoutContainer: React.FC<PropsWithChildren> = ({ children }) => {
	return <MainLayoutView>{children}</MainLayoutView>;
};

export default MainLayoutContainer;
