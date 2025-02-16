import { Navigation } from 'react-native-navigation';
import * as screens from './screens';
import { loadIcons } from './icons';

function setDefaultOptions() {
  Navigation.setDefaultOptions({
    // set natigation default options here
  });
}

// register screens
Object.keys(screens).forEach(screenKey => {
  Navigation.registerComponent(screenKey, () => {
    // register your Provider here
    // TODO add example
    return screens[screenKey as keyof typeof screens];
  });
});

Navigation.events().registerAppLaunchedListener(async () => {
  await loadIcons();

  setDefaultOptions();
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
            },
          },
        ],
      },
    },
  });
});
