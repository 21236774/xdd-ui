import {
  createElementBlock,
  defineComponent,
  normalizeClass,
  openBlock,
  renderSlot
} from "./chunk-2TUX3OCF.js";

// ../node_modules/.pnpm/xdd-ui@0.0.22/node_modules/xdd-ui/es/components/button/index.vue.mjs
import "D:/学习/xdd-ui/node_modules/.pnpm/xdd-ui@0.0.22/node_modules/xdd-ui/es/components/button/style/index.css";

// ../node_modules/.pnpm/xdd-ui@0.0.22/node_modules/xdd-ui/es/components/button/props.mjs
var e = {
  type: {
    type: String,
    default: "default"
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.22/node_modules/xdd-ui/es/components/button/index.vue.mjs
var c = defineComponent({
  __name: "index",
  props: e,
  setup(a) {
    return (e2, d) => (openBlock(), createElementBlock("button", {
      class: normalizeClass(["xdd-" + e2.type, "xdd-button"])
    }, [
      renderSlot(e2.$slots, "default")
    ], 2));
  }
});

// ../node_modules/.pnpm/xdd-ui@0.0.22/node_modules/xdd-ui/es/components/index.mjs
var n = {
  install(t) {
    t.component("xddButton", c);
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.22/node_modules/xdd-ui/es/utils/index.mjs
var n2 = (e2, c2) => {
};
export {
  n2 as debounce,
  n as default
};
//# sourceMappingURL=xdd-ui.js.map
