"use client";

import styled from "styled-components";

export const Content = styled.div`
	position: relative;
	height: 100%;

	button {
		padding: 0 15px;
	}
`;
export const Menu = styled.ul<{ $active?: boolean }>`
	position: absolute;
	right: 0;
	top: calc(100% + 10px);

	display: ${(props) => (props.$active ? "flex" : "none")};
	flex-direction: column;

	background: #ffffff;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
	overflow: hidden;

	button {
		width: 100%;

		border: none;
		border-radius: 0;
		padding: 10px;

		&:hover {
			background: ${({ theme }) => theme.colors.secondary}
		}
	}
`;

export const MenuButton = styled.button`
	border: none;
	border-radius: 0;
	padding: 10px;

	&:hover {
		background: ${({ theme }) => theme.colors.secondary}
	}
`;
