import { ThumbsUp, Bookmark, Share2, Building2, MapPin } from "lucide-react";
import type { Company } from "@/types";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const getRiskBadge = (level: Company["riskLevel"]) => {
    switch (level) {
      case "safe":
        return {
          label: "✅ 可以冲",
          color: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
        };
      case "warning":
        return {
          label: "⚠️ 有点坑",
          color: "bg-gradient-to-r from-yellow-500 to-amber-500 text-white",
        };
      case "danger":
        return {
          label: "🚩 慎重考虑",
          color: "bg-gradient-to-r from-red-500 to-rose-500 text-white",
        };
    }
  };

  const badge = getRiskBadge(company.riskLevel);

  return (
    <div className="bg-white rounded-2xl border p-2 mb-4 shadow-xl border-purple-200 transition-all duration-300 cursor-pointer group">
      {/* 企业信息头部 */}
      <div className="flex items-start gap-1 pt-2 mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-gradient-to-br shrink-0 from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <Building2 className="w-4 h-4 text-white" />
            </div>
            <h4>{company.name}</h4>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span>{company.location}</span>
            </div>
            <span className="text-gray-300">·</span>
            <span>{company.industry}</span>
          </div>
        </div>
        <span
          className={`text-xs px-2 py-1.5 rounded-full ${badge.color} whitespace-nowrap shadow-md`}
        >
          {badge.label}
        </span>
      </div>

      {/* 详细信息 */}
      <div className="space-y-4 mb-5">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100">
          <h4 className="text-xs text-blue-700 mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            面试流程
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed">
            {company.interviewProcess}
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
          <h4 className="text-xs text-purple-700 mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            薪资情况
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed">
            {company.salary}
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
          <h4 className="text-xs text-green-700 mb-2 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            工作氛围
          </h4>
          <p className="text-xs text-gray-700 leading-relaxed">
            {company.atmosphere}
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-4">
          <h4 className="text-xs text-amber-800 mb-2 flex items-center gap-1.5">
            <span>⚠️</span>
            避坑提醒
          </h4>
          <p className="text-xs text-amber-800 leading-relaxed">
            {company.warning}
          </p>
        </div>
      </div>

      {/* 底部操作 */}
      <div className="flex items-center justify-between border-t border-gray-100">
        <div className="flex items-center">
          <button className="flex items-center gap-1.5 text-xs text-gray-600 border-none bg-white hover:text-red-500  px-3 py-2 rounded-lg transition-all">
            <ThumbsUp className="w-4 h-4" />
            <span>
              有用 <span className="tabular-nums">{company.useful}</span>
            </span>
          </button>
          <button className="flex items-center gap-1.5 text-xs text-gray-600 border-none bg-white hover:text-amber-600 px-3 py-2 rounded-lg transition-all">
            <Bookmark className="w-4 h-4" />
            <span>收藏避雷</span>
          </button>
        </div>
        <button
          aria-label="分享"
          className="text-xs text-gray-600 hover:text-blue-600 border-none bg-white p-2 rounded-lg transition-all"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
