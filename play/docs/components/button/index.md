#### 普通按钮
<ClientOnly>
<x-config-provider :theme="!isDark ? 'theme' : 'dark'">
  <x-button>默认按钮</x-button>
  <x-button type="success">成功按钮</x-button>
  <x-button type="info">Info</x-button>
  <x-button type="warning">Warning</x-button>
  <x-button type="error">Error</x-button>
  <x-button disabled>禁用按钮</x-button>
</x-config-provider>
</ClientOnly>

::: details 显示代码

```vue
<x-button>默认按钮</x-button>

<x-button type="success">成功按钮</x-button>
<x-button type="info">Info</x-button>
<x-button type="warning">Warning</x-button>
<x-button type="error">Error</x-button>
<x-button disabled>禁用按钮</x-button>
```

:::
<br>

#### 带尺寸的按钮
> 有 tiny、small、medium 和 large 尺寸，默认展示medium。
<ClientOnly>
<x-config-provider :theme="!isDark ? 'theme' : 'dark'">
  <x-button size="tiny">小小</x-button>
  <x-button size="small">小</x-button>
  <x-button>不小</x-button>
  <x-button size="large">很不小</x-button>
</x-config-provider>
</ClientOnly>

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

::: details 显示代码

```vue
<x-button size="tiny">小小</x-button>
<x-button size="small">小</x-button>
<x-button>不小</x-button>
<x-button size="large">很不小</x-button>
```

:::