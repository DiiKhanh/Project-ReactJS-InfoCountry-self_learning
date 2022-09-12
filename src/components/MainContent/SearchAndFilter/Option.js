import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Option(props) {
  const { region } = props;
  const navigate = useNavigate();

  const handleValueOption = () => {
    if (region.value !== "All") {
      navigate(`/region/${region.value}`);
    } else {
      navigate("/");
    }
  };

  return (
    <OptionItem onClick={handleValueOption}>
      <region.icon />
      <span>{region.value}</span>
    </OptionItem>
  );
}

export default Option;
const OptionItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  padding: 4px 8px;
  transition: all 0.2s ease;
  &:hover {
    font-weight: bold;
    background: var(--color-option-item);
  }

  span {
    margin-left: 5px;
  }
`;
