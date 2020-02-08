// 这个文件是用于获取与注册所有可用类型
import Base, { ILayoutType } from './Base';
const _list: Array<ILayoutType> = [];

interface RegisterType {
  new (): ILayoutType;
}

export const register = (Type: RegisterType) => {
  const type = new Type();
  const name = type.name;
  if (!name) {
    console.warn('register type Error name is require!', Type);
  }
  const isExist = _list.findIndex((val) => val.name === name);
  if (isExist >= 0) {
    return;
  }

  _list.push(type);
};

export const get = (name: string): ILayoutType => {
  const type = _list.find((val) => val.name === name);
  if (type) {
    return type;
  } else {
    const baseType = new Base();
    return baseType;
  }
};