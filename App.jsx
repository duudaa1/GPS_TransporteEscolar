import { NavigationContainer } from '@react-navigation/native';
import RootRoutes from './src/router';
import { AuthProvider } from './src/context';

export default function App() {
  return (    
          <NavigationContainer>
            <AuthProvider>
              <RootRoutes/>
            </AuthProvider>
          </NavigationContainer>
  );
}
