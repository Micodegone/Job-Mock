import Taro from "@tarojs/taro";
/**
 * 返回上一页
 * @returns void
 */
export function onBack(): void {
  // 判断是否有上一页,没有则返回首页
  const pages = Taro.getCurrentPages();
  if (pages.length > 1) {
    Taro.navigateBack();
  } else {
    Taro.reLaunch({ url: "/pages/index/index" });
  }
}
