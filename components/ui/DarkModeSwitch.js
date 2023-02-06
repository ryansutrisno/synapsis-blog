import {useColorMode, IconButton} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';

export default function DarkModeSwitch() {
  const {colorMode, toggleColorMode} = useColorMode();
  return (
    <IconButton
      aria-label="Toggle dark mode"
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
    />
  );
}
