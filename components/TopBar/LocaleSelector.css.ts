import styled from "styled-components";

export const LocaleSelector = styled.ul<{ $active?: boolean }>`
    position: absolute;
	right: 0;
	top: calc(100% + 15px);

	display: ${(props) => (props.$active ? "flex" : "none")};
	flex-direction: column;

	background: #ffffff;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 10px;
	overflow: hidden;

	& li > button {
		width: 100%;

		border: none;
		border-radius: 0;
		padding: 10px;

		&:hover {
			background: ${({ theme }) => theme.colors.secondary}
		}
	}
`;
