import fs from "fs";
import { resolve } from "path";
import { xddPath } from "./paths";
//保留的文件
const stayFile = ["package.json", "README.md"];

// 删除目录
const delPath = async (path: string) => {
  let files: string[] = []
  
  if (fs.existsSync(path)) {
    
    
    files = fs.readdirSync(path);

    files.forEach(async (file) => {
      let curPath = resolve(path, file);

      if (fs.statSync(curPath).isDirectory()) {
        // recurse
        if (file != "node_modules") await delPath(curPath);
      } else {
        // delete file
        if (!stayFile.includes(file)) {
          fs.unlinkSync(curPath);
        }
      }
    });
    
    if (path != `${xddPath}/xdd-ui`) fs.rmdirSync(path);
  }
};
export default delPath;
