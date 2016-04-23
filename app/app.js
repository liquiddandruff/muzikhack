import {App, Platform} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';


@App({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  static get parameters() {
    return [[Platform]];
  }

  constructor(platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

    muzik.startServer();

    muzik.registerForConnectionState(function onStateChanged(state) {
      if (state == muzik.CONNECTION_STATE.CONNECTED) {
        onConnect();
      }
      else if (state == muzik.CONNECTION_STATE.HEADPHONES_NOT_CONNECTED) {
        // handle
      }
      // ...
    });

    function onConnect() {
      muzik.getBatteryLevel(function onBatteryLevelReceived(batteryLevel) {
        alert ("The current battery level is :" + batteryLevel + "%");
      });
    }

    });
  }
}
