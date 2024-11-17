import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { ContainerLayout } from "./components/layout/ContainerLayout";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ContainerLayout>
			<RouterProvider router={router} />
		</ContainerLayout>
	</StrictMode>,
);
