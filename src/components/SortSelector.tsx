import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGame";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectSortOrder:(sortOrder: string)=>void
  sortOrder:string
}
const SortSelector = ({onSelectSortOrder,sortOrder}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "Name", label: "Name" },
    { value: "-released", label: "Released Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
const currentSortOrder = sortOrders.find(order => order.value === sortOrder)

  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown></BsChevronDown>}>
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick = {()=> onSelectSortOrder(order.value)}key={order.value} value={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
