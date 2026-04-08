import styled from "styled-components";

export const FavoritesContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
`;

export const FavoritesSection = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;

	padding: 30px;
	border: 1px solid ${({ theme }) => theme.colors.secondary};
	border-radius: 15px;

	h2 {
		font-weight: 400;
		margin: 0;
	}
`;

export const FavoritesGrid = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start; // Выравнивание сетки по левому краю
	gap: 16px; // Сохранение уменьшенного расстояния между карточками
	width: 100%;
`;

export const ProductCard = styled.div`
	flex: 1 1 calc(25% - 20px);
	max-width: calc(25% - 20px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	border-radius: 12px;
	padding: 20px;
	background: white;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	transition:
		transform 0.2s ease,
		box-shadow 0.2s ease;
	height: calc(130%);

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}
`;

export const ProductImage = styled.div`
	width: 100%;
	height: 250px;
	background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.colors.secondary};
	margin-bottom: 16px;

	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
`;

export const ProductInfo = styled.div`
	padding: 12px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;

export const ProductTitle = styled.h3`
	font-size: 18px;
	font-weight: 500;
	margin: 0;
	text-align: center;
	color: ${({ theme }) => theme.colors.text};
`;

export const ProductPrice = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.primary};
`;

export const ProductActions = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 16px;

	button {
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 10px;
		border-radius: 50%;
		transition: background 0.2s ease;

		&:hover {
			background: ${({ theme }) => theme.colors.secondary}20;
		}

		svg {
			color: ${({ theme }) => theme.colors.secondary};
			height: 28px;
			width: 28px;
		}
	}
`;

export const DiscountBadge = styled.div`
	position: absolute;
	top: 8px;
	left: 8px;
	background: ${({ theme }) => theme.colors.error};
	color: white;
	padding: 4px 8px;
	border-radius: 4px;
	font-size: 12px;
	font-weight: bold;
`;

export const EmptyState = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	padding: 60px 20px;
	color: ${({ theme }) => theme.colors.secondary};
	font-size: 18px;
	text-align: center;
`;
