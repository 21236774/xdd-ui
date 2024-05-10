#### 全局化配置组件
全局化配置设置内部组件的主题（深色、亮色）
> 可以直接引入在根组件中全局使用（切换暗黑模式即可看到）
<ClientOnly>
<x-config-provider :theme="!isDark ? 'theme' : 'dark'">
  <x-button>默认按钮</x-button>
  <x-button type="success">成功按钮</x-button>
</x-config-provider>
</ClientOnly>

::: details 显示代码

```html
<x-config-provider :theme="!isDark ? 'theme' : 'dark'">
  <x-button>默认按钮</x-button>
  <x-button type="success">成功按钮</x-button>
</x-config-provider>
```

:::
<br>