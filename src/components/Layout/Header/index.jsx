import React from "react";
import "./header.css";
import { TextInput, ActionIcon, useMantineTheme } from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../../context";

const Header = (props) => {
  const { inputTitle, setInputTitle, setTitleName } = useContext(MovieContext);
  const theme = useMantineTheme();
  const navigate = useNavigate();
  return (
    <div className="headerSection">
      <div className="headerLogo">
        <Link to="/" className="logoLogo">
          <h1>IMDb</h1>
        </Link>
      </div>
      <div className="headerInput">
        <TextInput
          icon={<IconSearch size={18} stroke={1.5} />}
          radius="xl"
          size="md"
          onChange={(e) => {
            setInputTitle(e.target.value);
          }}
          rightSection={
            <ActionIcon
              size={32}
              radius="xl"
              color={theme.primaryColor}
              variant="filled"
              onClick={() => {
                setTitleName(inputTitle);
                navigate("/searched");
              }}>
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
        <Link to="/movies" className="movieLink">
          <p>Movies</p>
        </Link>
        <Link to="/tvs" className="tvsLink">
          <p>TVs</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
