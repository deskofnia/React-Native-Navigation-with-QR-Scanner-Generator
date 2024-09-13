import { Alert, Platform, ToastAndroid } from "react-native";
import { openSettings, PERMISSIONS, Permission, request, RESULTS } from "react-native-permissions";

export const requestPermission = async (
  permission?: Permission,
  message = 'allow_storage_permission',
) => {
  try {
    if (!permission) {
      permission =
        Platform.OS === 'ios'
          ? PERMISSIONS.IOS.PHOTO_LIBRARY
          : PERMISSIONS.ANDROID.ACCESS_MEDIA_LOCATION;
    }
    const status = await request(permission);

    if ([RESULTS.GRANTED, RESULTS.LIMITED].includes(status)) {
      return true;
    } else if (status === RESULTS.BLOCKED) {
      // showToast(i18n.t(message));
      Alert.alert('allow_permissions', (message), [
        {text: ('go_to_settings'), onPress: () => openSettings()},
        {text: ('cancel'), onPress: () => false},
      ]);
      return false;
    }
    // showToast(i18n.t('permission_denied'), ToastAndroid.SHORT);

    return false;
  } catch (error) {
    console.log('requestPermission error', error);
    return false;
  }
};
