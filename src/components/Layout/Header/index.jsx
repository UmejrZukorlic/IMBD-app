import React from "react";
import "./header.css";
import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons";

const Header = (props) => {
  const theme = useMantineTheme();
  return (
    <div className="headerSection">
      <div className="headerLogo">
        <h1>IMDb</h1>
      </div>
      <div className="headerInput">
        <TextInput
          icon={<IconSearch size={18} stroke={1.5} />}
          radius="xl"
          size="md"
          rightSection={
            <ActionIcon
              size={32}
              radius="xl"
              color={theme.primaryColor}
              variant="filled">
              {theme.dir === "ltr" ? (
                <IconArrowRight size={18} stroke={1.5} />
              ) : (
                <IconArrowLeft size={18} stroke={1.5} />
              )}
            </ActionIcon>
          }
          placeholder="Search Title"
          rightSectionWidth={42}
        />
      </div>
      <div className="filmOrMovie">
        <p>Films</p>
        <p>Movies</p>
      </div>
    </div>
  );
};

export default Header;
