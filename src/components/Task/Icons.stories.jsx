import styled from "styled-components";

import { CompletedIcon, DeleteIcon, FavoriteIcon } from "./Icons";
import { BaseColors } from "../../types";

export default {
	title: "Components / Task / Icons",
};

const Section = styled.section`
	border: 1px solid ${BaseColors.light};
	padding: 4px 16px;
	margin: 16px 0;
`;

export const Icons = () => {
	return (
		<>
			<Section>
				<h2>Favorite</h2>
				<FavoriteIcon isFavorite={true} />
				<FavoriteIcon isFavorite={false} />
			</Section>

			<Section>
				<h2>Completed</h2>
				<CompletedIcon isCompleted={true} />
				<CompletedIcon isCompleted={false} />
			</Section>

			<Section>
				<h2>Delete</h2>
				<DeleteIcon />
				<DeleteIcon isHouver={true} />
			</Section>
		</>
	);
};
