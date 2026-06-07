import hooks from "./hooks";
import { AddonData, createAddonData } from "./app/context";

class Addon {
  public data: AddonData;
  // Lifecycle hooks
  public hooks: typeof hooks;
 
  constructor() {
    this.data = createAddonData();
    this.hooks = hooks;
  }
}

export default Addon;
