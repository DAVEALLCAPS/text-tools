import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TextToolPage from './TextToolPage';
import TTSPage from './TTSPage';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from './components/ui/navigation-menu';

function App() {
  return (
    <Router>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6">
                <li>
                  <NavigationMenuLink href="/">Text Manipulation</NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink href="/tts">Text to Speech</NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Routes>
        <Route path="/" element={<TextToolPage />} />
        <Route path="/tts" element={<TTSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
