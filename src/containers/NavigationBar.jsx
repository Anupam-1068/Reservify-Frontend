import { Flex, Box, Spacer, Link,Image } from "@chakra-ui/react";
// import { useTranslation } from "react-i18next";
import logo from '../assets/logo.png';
import LanguageSwitcher from "../LanguageSwitcher";


function NavigationBar() {
  // const { t, i18n } = useTranslation();

  // function changeLanguage(language) {
  //   i18n.changeLanguage(language);
  // }

  return (
    <Flex bg="#f7fff0" p={3} color="black">
      <Image src={logo} alt="Logo" h={10} mr={4} /> 
      <Box p="2">
        <Link href="/resevify/home">Home</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link href="/resevify/bookspace">Bookspace</Link>
      </Box>
      <Box p="2">
        <LanguageSwitcher/>
      </Box>
    </Flex>
  );
}

export default NavigationBar;
