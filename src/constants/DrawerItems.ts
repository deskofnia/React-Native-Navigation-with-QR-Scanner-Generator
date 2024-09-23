import Home from '../screens/Home';
import GenerateQRScreen from '../screens/Generate';
import ProfileScreen from '../screens/Profile';
import ScanQRScreen from '../screens/Scan';
import SettingsScreen from '../screens/Settings';
import TabNavigator from '../views/Navigators/TabNavigator';
import TabViewExample from '../screens/TabView';

export default [
  {
    name: 'Home',
    iconType: 'FontAwesome5',
    iconName: 'home',
    component: Home,
  },
  {
    name: 'Profile',
    iconType: 'Material',
    iconName: 'face-man-profile',
    component: ProfileScreen,
  },
  {
    name: 'QR Scanner',
    iconType: 'Material',
    iconName: 'scan-helper',
    component: ScanQRScreen,
  },
  {
    name: 'QR Generator',
    iconType: 'Material',
    iconName: 'qrcode-scan',
    component: GenerateQRScreen,
  },
  {
    name: 'View Tabs',
    iconType: 'Material',
    iconName: 'view-column-outline',
    component: TabViewExample,
  },
  {
    name: 'Bottom Tabs',
    iconType: 'Feather',
    iconName: 'navigation',
    component: TabNavigator,
  },
  {
    name: 'Settings',
    iconType: 'Feather',
    iconName: 'settings',
    component: SettingsScreen,
  },
];
