import {
  Teleport,
  Transition,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  ref,
  renderSlot,
  toDisplayString,
  useSlots,
  watch,
  withCtx
} from "./chunk-2TUX3OCF.js";

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/button/index.vue.mjs
import "D:/study/学习/xdd-ui/node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/button/style/index.css";

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/button/props.mjs
var e = {
  type: {
    type: String,
    default: "default"
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: "medium"
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/button/index.vue.mjs
var a = ["disabled"];
var b = defineComponent({
  __name: "index",
  props: e,
  setup(i) {
    return (e4, l) => (openBlock(), createElementBlock("button", {
      class: normalizeClass([
        "xdd-" + e4.type,
        "xdd-button",
        "xdd-button-" + e4.disabled,
        "xdd-button-" + e4.size
      ]),
      disabled: e4.disabled
    }, [
      renderSlot(e4.$slots, "default")
    ], 10, a));
  }
});

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/config-provider/props.mjs
var e2 = {
  theme: {
    type: String,
    default: "default"
  },
  themeOverrides: {
    type: Object,
    default: () => ({})
  },
  className: {
    type: String,
    default: "xdd-theme"
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/config-provider/config/index.mjs
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

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/config-provider/utils/index.mjs
var n = (t3, o = "xdd-theme") => {
  console.log("className: ", o);
  const s = document.getElementsByClassName(o);
  for (let e4 = 0; e4 < s.length; e4++) {
    const c2 = s[e4];
    Object.keys(t3).forEach((l) => {
      c2.style.setProperty(`--${l}`, t3[l]);
    });
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/config-provider/index.vue.mjs
import "D:/study/学习/xdd-ui/node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/config-provider/style/index.css";
var S = defineComponent({
  __name: "index",
  props: e2,
  setup(r) {
    const t3 = r;
    return watch(() => t3.theme, (e4) => {
      const o = e4 !== "dark" ? "theme" : e4;
      console.log(o), n(t[o], t3.className);
    }), onMounted(() => {
      const e4 = t3.theme !== "dark" ? "theme" : "dark";
      console.log(t3.theme), n(t[e4], t3.className);
    }), (e4, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(["xdd-theme-" + e4.theme, "xdd-theme", e4.className])
    }, [
      renderSlot(e4.$slots, "default")
    ], 2));
  }
});

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/modal/props.mjs
var e3 = {
  show: {
    type: Boolean,
    default: false
  },
  maskClosable: {
    type: Boolean,
    default: true
  },
  preset: String,
  title: {
    type: String,
    default: "标题-我是头头"
  },
  content: {
    type: String,
    default: "你确定？"
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  confirmText: {
    type: String,
    default: "确定"
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/modal/dialog/index.vue.mjs
import "D:/study/学习/xdd-ui/node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/modal/style/dialog.css";

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/modal/dialog/props.mjs
var t2 = {
  title: {
    type: String,
    default: "标题-我是头头"
  },
  content: {
    type: String,
    default: "你确定？"
  },
  cancelText: {
    type: String,
    default: "取消"
  },
  confirmText: {
    type: String,
    default: "确定"
  },
  cancel: {
    type: Function,
    default: () => function() {
    }
  },
  confirm: {
    type: Function,
    default: () => function() {
    }
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/modal/dialog/index.vue.mjs
var S2 = { class: "xdd-modal-dialog" };
var $ = { class: "xdd-modal-dialog-title" };
var C = { key: 0 };
var x = { class: "xdd-modal-dialog-content" };
var N = { key: 0 };
var T = {
  key: 0,
  class: "xdd-modal-dialog-preset"
};
var V = {
  key: 1,
  class: "xdd-modal-dialog-preset"
};
var b2 = defineComponent({
  __name: "index",
  props: t2,
  setup(z2) {
    const o = useSlots(), r = ref(false), c2 = ref(false), f = ref(false), n3 = (e4) => {
      var t3;
      return e4.length > 0 && ((t3 = e4[0].children) == null ? void 0 : t3.length) !== 0;
    };
    return o.default && (r.value = n3(o.default())), o.header && (c2.value = n3(o.header())), o.action && (f.value = n3(o.action())), (e4, t3) => (openBlock(), createElementBlock("div", S2, [
      createBaseVNode("div", $, [
        c2.value ? renderSlot(e4.$slots, "header", { key: 1 }) : (openBlock(), createElementBlock("div", C, toDisplayString(e4.title), 1))
      ]),
      createBaseVNode("div", x, [
        r.value ? renderSlot(e4.$slots, "default", { key: 1 }) : (openBlock(), createElementBlock("div", N, toDisplayString(e4.content), 1))
      ]),
      f.value ? (openBlock(), createElementBlock("div", T, [
        renderSlot(e4.$slots, "action")
      ])) : (openBlock(), createElementBlock("div", V, [
        createVNode(b, {
          size: "tiny",
          onClick: t3[0] || (t3[0] = (_) => e4.cancel())
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(e4.cancelText), 1)
          ]),
          _: 1
        }),
        createVNode(b, {
          type: "success",
          size: "tiny",
          onClick: t3[1] || (t3[1] = (_) => e4.confirm())
        }, {
          default: withCtx(() => [
            createTextVNode(toDisplayString(e4.confirmText), 1)
          ]),
          _: 1
        })
      ]))
    ]));
  }
});

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/modal/index.vue.mjs
import "D:/study/学习/xdd-ui/node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/modal/style/index.css";
var C2 = {
  key: 0,
  class: "xdd-modal"
};
var x2 = { key: 0 };
var b3 = { key: 1 };
var z = defineComponent({
  __name: "index",
  props: e3,
  emits: ["update:show", "cancel-click", "confirm-click"],
  setup(f, { emit: a2 }) {
    const c2 = f, d = (e4, n3 = true) => {
      n3 && a2("update:show", e4);
    }, k = () => {
      d(false), a2("cancel-click");
    }, u = () => {
      d(false), a2("confirm-click");
    };
    return (e4, n3) => (openBlock(), createBlock(Teleport, { to: "body" }, [
      createVNode(Transition, { name: "mask" }, {
        default: withCtx(() => [
          e4.show ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "xdd-mask",
            onClick: n3[0] || (n3[0] = (B) => d(false, e4.maskClosable))
          })) : createCommentVNode("", true)
        ]),
        _: 1
      }),
      createBaseVNode("div", {
        class: "xdd-modal-box xdd-theme",
        style: normalizeStyle({ zIndex: e4.show ? 99 : -1 })
      }, [
        createVNode(Transition, { name: "fade-modal" }, {
          default: withCtx(() => [
            e4.show ? (openBlock(), createElementBlock("div", C2, [
              c2 != null && c2.preset ? (openBlock(), createElementBlock("div", x2, [
                createVNode(b2, {
                  title: e4.title,
                  content: e4.content,
                  cancelText: e4.cancelText,
                  confirmText: e4.confirmText,
                  cancel: k,
                  confirm: u
                }, {
                  header: withCtx(() => [
                    renderSlot(e4.$slots, "header")
                  ]),
                  action: withCtx(() => [
                    renderSlot(e4.$slots, "action")
                  ]),
                  default: withCtx(() => [
                    renderSlot(e4.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["title", "content", "cancelText", "confirmText"])
              ])) : (openBlock(), createElementBlock("div", b3, [
                renderSlot(e4.$slots, "default")
              ]))
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ], 4)
    ]));
  }
});

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/components/index.mjs
var c = {
  install(o) {
    o.component("xButton", b), o.component("xConfigProvider", S), o.component("xModal", z);
  }
};

// ../node_modules/.pnpm/xdd-ui@0.0.24/node_modules/xdd-ui/es/utils/index.mjs
var n2 = (e4, c2) => {
};
export {
  n2 as debounce,
  c as default
};
//# sourceMappingURL=xdd-ui.js.map
