"use client";
import { useExtracted } from "next-intl";
import MapLib from "react-map-gl/maplibre";

import { Content, MapContent } from "./styles.css";

const page = () => {
	const t = useExtracted("profile");

	return (
		<Content>
			<span>{t("Open countries map")}</span>
			<MapContent>
				<MapLib
					mapStyle="/style.json"
					attributionControl={false}
					zoom={2}
					initialViewState={{
						longitude: 31,
						latitude: 48,
						zoom: 1.2,
					}}
					dragRotate={false}
					scrollZoom={false}
					boxZoom={false}
					doubleClickZoom={false}
					touchZoomRotate={false}
					keyboard={false}
					style={{ width: "100%", height: "100%" }}
				/>
			</MapContent>
		</Content>
	);
};

export default page;
