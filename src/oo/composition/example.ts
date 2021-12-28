class MyWindow {
  private open: boolean;

  constructor(initialState: boolean) {
    this.open = initialState;
  }

  openWindow() {
    if (this.open) throw new Error('MyWindow: Window is already opened');
    this.open = true;
    console.log("MyWindow: An window was opened");
  }

  closeWindow() {
    if (!this.open) throw new Error('MyWindow: Window is already closed');
    this.open = false;
    console.log("MyWindow: An window was closed");
  }
}

class StudioHouse {
  private bedroomWindow: MyWindow;
  private kitchenWindow: MyWindow;

  constructor() {
    this.bedroomWindow = new MyWindow(false);
    this.kitchenWindow = new MyWindow(false);
  }

  public openBedroomWindow() {
    console.log("StudioHouse: Opening the bedroom window");
    this.bedroomWindow.openWindow();
  }

  public openKitchenWindow() {
    console.log("StudioHouse: Opening the kitchen window");
    this.kitchenWindow.openWindow();
  }

  public openAllWindows() {
    console.log("StudioHouse: Opening all windows");
    this.openBedroomWindow();
    this.openKitchenWindow();
  }

  public closeBedroomWindow() {
    console.log("StudioHouse: Closing the bedroom window");
    this.bedroomWindow.closeWindow();
  }

  public closeKitchenWindow() {
    console.log("StudioHouse: Closing the kitchen window");
    this.kitchenWindow.closeWindow();
  }

  public closeAllWindows() {
    console.log("StudioHouse: Closing all windows");
    this.closeBedroomWindow();
    this.closeKitchenWindow();
  }
}

export { StudioHouse };
