import { PenSquare } from "lucide-react";
import { CompanyCard } from "@/pages/guide/CompanyCard";
import { mockCompanies } from "@/pages/data/mockData";
import { TabLayout } from "@/components/TabLayout";
import Taro from "@tarojs/taro";

export default function GuidePage() {
  const onCreateGuide = () => {
    // 跳转创建避坑指南页面
    Taro.navigateTo({ url: "/pages/createGuide/index" });
  };
  return (
    <TabLayout>
      <div className="flex flex-col h-full bg-gradient-to-b from-amber-50/30 to-orange-50/20">
        {/* 顶部固定区域 */}
        <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-yellow-500 border-b border-orange-200 shadow-lg">
          <div className="px-5 pt-8 pb-5">
            <h2 className="mb-2 text-white">避坑指南</h2>
            <p className="text-sm text-white/90 leading-relaxed">
              真实经历整理
              <br />
              帮你少走弯路、少踩坑
            </p>
          </div>
        </div>

        {/* 内容列表 */}
        <div className="flex-1 overflow-y-auto p-5">
          {mockCompanies.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="text-6xl mb-4">🛡️</div>
              <p className="text-gray-600 text-center mb-2">还没有避坑信息</p>
              <p className="text-gray-500 text-sm text-center">
                快来分享你的经历
              </p>
            </div>
          ) : (
            mockCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))
          )}
        </div>

        {/* 浮动发布按钮 */}
        <button
          aria-label="发布新避坑信息"
          onClick={onCreateGuide}
          className="fixed bottom-24 border-none right-6 w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 active:scale-95 text-white rounded-full shadow-2xl flex items-center justify-center transition-all z-40 hover:shadow-amber-500/50"
        >
          <PenSquare className="w-6 h-6" />
        </button>
        {/* 底部留白区域 */}
        <div className="h-24" />
      </div>
    </TabLayout>
  );
}
