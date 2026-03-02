import { useExtracted } from "next-intl";

const page = () => {
	const t = useExtracted("profile");

	return (
		<div>
			<div>
				<span>{t("Hermes Traveler's Passport")}</span>
				<div></div>
			</div>
			<div></div>
		</div>
	);
};

export default page;
