import { useState } from "react";
import CampaignFlag from "../../../public/icons/CampaignFlag";
import User from "../../../public/icons/User";
import Archive from "../../../public/icons/Archive";
import Logout from "../../../public/icons/Logout";
import { NavLink, Button } from "@mantine/core";

const data = [
  { icon: CampaignFlag, label: "Active Campaign", color: "#065471" },
  {
    icon: Archive,
    label: "Past Campaign",
    color: "#065471",
  },
  { icon: User, label: "Account", color: "#065471" },
];

const Navbar = () => {
  const [active, setActive] = useState(0);
  const items = data.map((item, index) => (
    <NavLink
      href="#required-for-focus"
      key={item.label}
      active={index === active}
      label={item.label}
      leftSection={<item.icon />}
      onClick={() => setActive(index)}
      color={item.color}
      h={50}
    />
  ));

  return (
    <div className="w-[220px] h-full flex flex-col justify-between">
      <div>{items}</div>
      <Button variant="outline" color="red" size="md" radius="md">
        <div className="flex flex-row gap-2 items-center">
          <Logout />
          Logout
        </div>
      </Button>
      
    </div>
  );
};
export default Navbar;
