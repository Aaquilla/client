import ProfileBar from "@/components/ProfileBar/ProfileBar";
import { Content } from "./layout.css";

const layout = async ({ children }: { children: React.ReactNode }) => {
	return (
		<Content>
			<ProfileBar />
			{children}
		</Content>
	);
};

export default layout;
