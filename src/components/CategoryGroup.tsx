import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";
import { updateCategories } from "../features/opportunity";
import EducationIcon from "./Svgs/EducationIcon";
import CharityIcon from "./Svgs/CharityIcon";
import ArtIcon from "./Svgs/ArtIcon";
import SportsIcon from "./Svgs/SportsIcon";
import HealthcareIcon from "./Svgs/HealthcareIcon";
import EnvironmentIcon from "./Svgs/EnvironmentIcon";
import TutoringIcon from "./Svgs/TutoringIcon";
import AnimalIcon from "./Svgs/AnimalIcon";
import ReligionIcon from "./Svgs/ReligionIcon";
import TechnologyIcon from "./Svgs/TechnologyIcon";
import FestivalIcon from "./Svgs/FestivalIcon";
import OtherIcon from "./Svgs/OtherIcon";
import { Grid } from "@material-ui/core";
import { EventCategory } from "@icontribute-founder/firebase-access";

interface ClickableCategoryCardProps {
  svg: any;
  selected: boolean;
  onClick: any;
}

const CategoryCard = styled.button<CategoryCardProps>`
  background: ${(props) =>
    props.selected ? "#FFCB66" : "rgba(255, 174, 16, 0.08)"};
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  font-family: Source Sans Pro;
  line-height: 16px;
  height: 134px;
  width: 171px;
  :hover {
    cursor: pointer;
  }
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CategoryCardProps {
  selected: boolean;
}

const ClickableCategoryCard = ({
  selected,
  onClick,
  svg,
}: ClickableCategoryCardProps) => {
  return (
    <CategoryCard selected={selected} onClick={onClick}>
      {svg}
    </CategoryCard>
  );
};

interface Category {
  category: EventCategory;
  svg: any;
}

const CategoryGroup = () => {
  const categoriesSvgs: Category[] = [
    { category: EventCategory.Education, svg: <EducationIcon /> },
    { category: EventCategory.Charity, svg: <CharityIcon /> },
    { category: EventCategory.Art, svg: <ArtIcon /> },
    { category: EventCategory.Other, svg: <FestivalIcon /> },
    { category: EventCategory.Sports, svg: <SportsIcon /> },
    { category: EventCategory.Healthcare, svg: <HealthcareIcon /> },
    { category: EventCategory.Environment, svg: <EnvironmentIcon /> },
    { category: EventCategory.Other, svg: <TechnologyIcon /> },
    { category: EventCategory.Tutoring, svg: <TutoringIcon /> },
    { category: EventCategory.Animal, svg: <AnimalIcon /> },
    { category: EventCategory.Other, svg: <ReligionIcon /> },
    { category: EventCategory.Other, svg: <OtherIcon /> },
  ];
  const { opportunity } = useSelector((state: RootState) => state.opportunity);

  const { categories } = opportunity;

  console.log(opportunity);

  const dispatch = useDispatch();

  const addCategory = (category: EventCategory) => {
    dispatch(updateCategories(category));
  };

  return (
    <div style={{ width: "70%" }}>
      <Grid container spacing={4}>
        {categoriesSvgs.map(({ category, svg }) => {
          return (
            <Grid container spacing={1}  item sm={3} key={`${category}-category-grid`}>
              <ClickableCategoryCard
                selected={categories.includes(category)}
                onClick={() => {
                  addCategory(category);
                }}
                svg={svg}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default CategoryGroup;
