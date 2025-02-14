import styles from "../styles/page.module.css";

// WRI Design System
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'
import { NavigationRail } from "@worldresources/wri-design-systems";

export default function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <div className={styles.page}>
        <NavigationRail
          tabs={[
            {
              label: 'Map',
              value: 'map',
            }
          ]}
        />
        <main className={styles.main}>
          <h1>Hello world!</h1>
        </main>
      </div>
    </ChakraProvider>
  );
}
