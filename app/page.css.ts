const styles = {
	main: {
		padding: "20px 40px",
	},

	h2: {
		fontFamily: "Gabriela, serif",
		fontSize: "34px",
		fontWeight: 400,
	},

	link: {
		cursor: "pointer",
	},

	hero: {
	marginTop: "40px",
	width: "100%",
    },

    sliderWrapper: {
	position: "relative" as const,
	width: "100%",
	height: "80vh",
	borderRadius: "20px",
	overflow: "hidden",
},

	slide: {
		position: "absolute" as const,
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		transition: "opacity 0.6s ease-in-out",
	},

    arrowBtn: {
	width: "40px",
	height: "40px",
	borderRadius: "50%",
	background: "rgba(59, 48, 40, 1)",
	color: "#fff",
	border: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",
	fontSize: "16px",
    },

	overlay: {
		position: "absolute" as const,
		bottom: "20px",
		left: "20px",
		background: "brown",
		color: "white",
		padding: "10px 20px",
		borderRadius: "50px",
		fontWeight: "bold",
	},

	controls: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: "20px",
		marginTop: "10px",
	},

	dots: {
		display: "flex",
		gap: "6px",
	},

	dot: {
		width: "8px",
		height: "8px",
		background: "#ccc",
		borderRadius: "50%",
	},

	dotActive: {
		width: "8px",
		height: "8px",
		background: "#000",
		borderRadius: "50%",
	},

	section: {
		marginTop: "50px",
	},

	header: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
	},

	categories: {
	display: "flex",
	justifyContent: "space-between",
	width: "100%",
	gap: "20px",
	marginTop: "20px",
    },

	category: {
	width: "215px",
	height: "242px",
	minWidth: "215px",

	display: "flex",
	flexDirection: "column" as const,
	alignItems: "center",
	justifyContent: "center",

	gap: "20px",
	padding: "26px",

	borderRadius: "24px",
	border: "1px solid #eee",

	cursor: "pointer",
	background: "#fff",
    },

	circle: {
	width: "130px",
	height: "130px",
	borderRadius: "50%",
	background: "#ddd",
    },

	mapBlock: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		background: "#f5f5f5",
		padding: "30px",
		borderRadius: "20px",
		marginTop: "20px",
	},

	centerCountry: {
		textAlign: "center" as const,
	},

	sideCircle: {
		width: "120px",
		height: "120px",
		borderRadius: "50%",
		background: "#ddd",
	},

	tickets: {
		display: "flex",
		gap: "20px",
		marginTop: "20px",
	},

	ticket: {
		flex: 1,
		padding: "20px",
		borderRadius: "15px",
		border: "1px dashed #ccc",
	},

	products: {
		display: "grid",
		gridTemplateColumns: "repeat(4, 1fr)",
		gap: "20px",
		marginTop: "20px",
	},

	card: {
	position: "relative" as const,
	border: "1px solid #e5ddd5",
	borderRadius: "24px",
	padding: "20px",
	background: "#fff",
	display: "flex",
	flexDirection: "column" as const,
	gap: "14px",
    },

	badge: {
		position: "absolute" as const,
		background: "red",
		color: "white",
		padding: "4px 8px",
		borderRadius: "5px",
		fontSize: "14px",
	},

	image: {
	height: "220px",
	background: "#eee",
	borderRadius: "16px",
    },

	name: {
	fontSize: "16px",
	fontWeight: 500,
	lineHeight: "1.3",
    },

    stock: {
	display: "flex",
	alignItems: "center",
	gap: "8px",
	fontSize: "14px",
	color: "#3b3028",
    },

    dotGreen: {
	width: "8px",
	height: "8px",
	borderRadius: "50%",
	background: "green",
    },

    ratingRow: {
	display: "flex",
	alignItems: "center",
	gap: "10px",
	fontSize: "14px",
    },

    stars: {
	color: "#f5b301",
	letterSpacing: "2px",
    },

    bottom: {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "flex-end",
	marginTop: "10px",
    },

    price: {
	fontSize: "20px",
	fontWeight: 700,
    },

    sub: {
	fontSize: "12px",
	color: "#888",
    },

    actions: {
	display: "flex",
	gap: "10px",
    },

    favBtn: {
	width: "44px",
	height: "44px",
	borderRadius: "12px",
	border: "none",
	background: "#f3eee9",
	cursor: "pointer",
	fontSize: "18px",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none"
    },

    cartBtn: {
	width: "44px",
	height: "44px",
	borderRadius: "12px",
	background: "#3b3028",
	color: "#fff",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	textDecoration: "none",
	},

	icon: {
	width: "20px",
	height: "20px",
	},

	countryImage: {
	width: "100%",
	height: "400px",
	borderRadius: "24px",
	marginTop: "20px",
	},

	catalogHeader: {
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	marginBottom: "30px",
	},

	catalogTitle: {
		fontSize: "28px",
		fontWeight: 500,
	},

	breadcrumbs: {
		fontSize: "14px",
		color: "#888",
		marginTop: "5px",
	},

	catalogActions: {
		display: "flex",
		gap: "10px",
	},

	filterBtn: {
		padding: "10px 16px",
		borderRadius: "10px",
		border: "1px solid #ddd",
		background: "#fff",
		cursor: "pointer",
	},
};

export default styles;