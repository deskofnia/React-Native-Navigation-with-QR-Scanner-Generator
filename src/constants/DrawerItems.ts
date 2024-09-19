import Home from '../components/Home';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';

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
    component: ProfileScreen,
  },
  {
    name: 'QR Generator',
    iconType: 'Material',
    iconName: 'qrcode-scan',
    component: ProfileScreen,
  },
  {
    name: 'Settings',
    iconType: 'Feather',
    iconName: 'settings',
    component: SettingsScreen,
  },
];
