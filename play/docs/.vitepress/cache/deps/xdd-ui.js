import {
  createElementBlock,
  defineComponent,
  normalizeClass,
  onMounted,
  openBlock,
  renderSlot,
  watch
} from "./chunk-2TUX3OCF.js";

// ../node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/components/button/index.vue.mjs
import "D:/学习/xdd-ui/node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/components/button/style/index.css";

// ../node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/components/button/props.mjs
var e = {
  type: {
    type: String,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: false
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/components/button/index.vue.mjs
var a = ["disabled"];
var b = defineComponent({
  __name: "index",
  props: e,
  setup(l) {
    return (e3, i) => (openBlock(), createElementBlock("button", {
      class: normalizeClass([
        "xdd-" + e3.type,
        "xdd-button",
        "xdd-button-" + e3.disabled
      ]),
      disabled: e3.disabled
    }, [
      renderSlot(e3.$slots, "default")
    ], 10, a));
  }
});

// ../node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/components/config-provider/props.mjs
var e2 = {
  theme: {
    type: String,
    default: "default"
  },
  themeOverrides: {
    type: Object,
    default: () => ({})
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/components/config-provider/config/index.mjs
var t = {
  theme: {
    "x-btn-text-color": "#fff",
    "x-text-color": "#333",
    "x-bg-color": "#fff"
  },
  dark: {
    "x-btn-text-color": "#333",
    "x-text-color": "#fff",
    "x-bg-color": "#333"
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/components/config-provider/utils/index.mjs
var o = (e3) => {
  Object.keys(e3).forEach((t2) => {
    document.getElementsByClassName("xdd-theme")[0].style.setProperty(`--${t2}`, e3[t2]);
  });
};

// ../node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/components/config-provider/index.vue.mjs
import "D:/学习/xdd-ui/node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/components/config-provider/style/index.css";
var x = defineComponent({
  __name: "index",
  props: e2,
  setup(r2) {
    const t2 = r2;
    return watch(() => t2.theme, (e3) => {
      o(t[e3 !== "dark" ? "theme" : e3]);
    }), onMounted(() => {
      const e3 = t2.theme !== "dark" ? "theme" : "dark";
      o(t[e3]);
    }), (e3, n2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["xdd-theme-" + e3.theme, "xdd-theme"])
    }, [
      renderSlot(e3.$slots, "default")
    ], 2));
  }
});

// ../node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/components/index.mjs
var r = {
  install(o2) {
    o2.component("xButton", b), o2.component("xConfigProvider", x);
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.23/node_modules/xdd-ui/es/utils/index.mjs
var n = (e3, c) => {
};
export {
  n as debounce,
  r as default
};
//# sourceMappingURL=xdd-ui.js.map
