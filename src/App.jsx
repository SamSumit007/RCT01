import { AppHeader, Applogo, AppStyled, Flexbox } from './Appstyled';
import logo from './logo.svg';

import { Button,Accordion, Box,  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, } from '@chakra-ui/react'
import DrawerExample from './components/Drawer';
import Pin from './components/pin';

function App() {
  return (
    <AppStyled>
      <AppHeader>
        <Applogo src={logo}  alt="logo" />
        <Flexbox flexDirection="column">
        <div>A</div>
        <div>B</div> </Flexbox>
        <Button colorScheme='teal' size='md'>
    Button
  </Button>
  <Breadcrumb>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Breadcrumb</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb>
  <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 1 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>


<DrawerExample />
<Pin />

      </AppHeader>
    </AppStyled>
  );
}

export default App;
