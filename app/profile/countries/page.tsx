"use client";
import MapLib from "react-map-gl/maplibre";

import { Content } from "./styles.css";

const page = () => {
	return (
		<Content>
			<MapLib
				mapStyle="/style.json"
				attributionControl={false}
				zoom={3}
				initialViewState={{
					longitude: 31,
					latitude: 48,
					zoom: 1.2,
				}}
				dragPan={{ maxSpeed: 0 }}
				dragRotate={false}
				scrollZoom={false}
				boxZoom={false}
				doubleClickZoom={false}
				touchZoomRotate={false}
				keyboard={false}
				style={{ width: "100%", height: "100%" }}
			/>
		</Content>
	);
};

export default page;
