import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const MenuTemporadas = ({ temporada, cantidad }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full md:mb-20 sm:mb-16">
      <div className="flex md:flex-row sm:flex-col justify-around md:items-start sm:items-center w-full text-white">
        <div className="flex flex-col justify-center md:items-start sm:items-center">
          <p className="md:text-4xl sm:text-2xl font-bold md:mb-7 sm:mb-3">
            Episodios
          </p>
          <div className="flex flex-row justify-center items-center sm:mb-4 md:mb-0">
            <p className="md:text-2xl sm:text-base font-semibold">
              {temporada == "" ? "Selecciona una temporada" : `${temporada}`}
            </p>
            <p className="bgyellow md:mx-3 sm:mx-1 text-black px-2 py-1 rounded-lg font-bold md:text-base sm:text-xs">
              {cantidad == "" ? "" : `${cantidad} +`}
            </p>
          </div>
        </div>

        <div>
          <Menu>
            {
              <>
                <MenuButton
                  fontWeight={"bold"}
                  fontSize={{ sm: 15, md: 30 }}
                  py={{ sm: 1, md: 6 }}
                  as={Button}
                  color={"white"}
                  _hover={{ bg: "rgba(0,0,0, 0.5)", color: "white" }}
                  bg={"rgba(0,0,0, 0.3)"}
                  rightIcon={<ChevronDownIcon />}
                >
                  Temporadas
                </MenuButton>
                <MenuList
                  fontSize={{ sm: 15, md: 30 }}
                  color={"black"}
                  _hover={{ bg: "rgba(0,0,0, 0.9)", color: "white" }}
                  bg={"rgba(0,0,0, 0.9)"}
                >
                  <MenuItem
                    color={"white"}
                    _hover={{ bg: "rgba(255,255,255, 0.2)", color: "white" }}
                    _active={{ bg: "rgba(255,255,255, 0.2)", color: "white" }}
                    bg={"rgba(0,0,0, 0.1)"}
                  >
                    <Link to={"/temporada-1"}>Temporada 1</Link>
                  </MenuItem>
                  <MenuItem
                    color={"white"}
                    _hover={{ bg: "rgba(255,255,255, 0.2)", color: "white" }}
                    bg={"rgba(0,0,0, 0.1)"}
                  >
                    <Link to={"/temporada-2"}>Temporada 2</Link>
                  </MenuItem>
                  <MenuItem
                    color={"white"}
                    _hover={{ bg: "rgba(255,255,255, 0.2)", color: "white" }}
                    bg={"rgba(0,0,0, 0.1)"}
                  >
                    <Link to={"/temporada-3"}>Temporada 3</Link>
                  </MenuItem>
                  <MenuItem
                    color={"white"}
                    _hover={{ bg: "rgba(255,255,255, 0.2)", color: "white" }}
                    bg={"rgba(0,0,0, 0.1)"}
                  >
                    <Link to={"/temporada-4"}>Temporada 4</Link>
                  </MenuItem>
                  <MenuItem
                    color={"white"}
                    _hover={{ bg: "rgba(255,255,255, 0.2)", color: "white" }}
                    bg={"rgba(0,0,0, 0.1)"}
                  >
                    <Link to={"/temporada-5"}>Temporada 5</Link>
                  </MenuItem>
                </MenuList>
              </>
            }
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default MenuTemporadas;
