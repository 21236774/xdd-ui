import delPath from "../utils/delpath"
import { series, parallel, dest, src } from "gulp"
import { componentPath, xddPath } from "../utils/paths"
import run from "../utils/run"
const less = require('gulp-less')
const autoprefixer = require('gulp-autoprefixer') // 美化样式


// 删除easyest
export const removeDist = () => {
  return delPath(`${xddPath}/xdd-ui`);
}

// 打包less样式
export const buildStyle = () => {
  return src(`${componentPath}/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${xddPath}/xdd-ui/lib/components`))
    .pipe(dest(`${xddPath}/xdd-ui/es/components`));
}

// 执行外面的run build 打包vue文件
export const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent(),
  ),
)