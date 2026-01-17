import { useState } from "react";
import {
  Building2,
  MapPin,
  Briefcase,
  DollarSign,
  Users,
  AlertTriangle,
} from "lucide-react";
import { TopBarNav } from "@/components/TopBarNav";
import { onBack } from "@/utils/back";

export default function CreateCompanyGuide() {
  const [formData, setFormData] = useState({
    companyName: "",
    location: "",
    industry: "",
    position: "",
    interviewProcess: "",
    salary: "",
    atmosphere: "",
    warning: "",
    riskLevel: "warning" as "safe" | "warning" | "danger",
  });

  const [isAnonymous, setIsAnonymous] = useState(true);

  const riskLevels = [
    {
      value: "safe" as const,
      label: "✅ 可以冲",
      color: "from-green-500 to-emerald-500",
    },
    {
      value: "warning" as const,
      label: "⚠️ 有点坑",
      color: "from-yellow-500 to-amber-500",
    },
    {
      value: "danger" as const,
      label: "🚩 慎重考虑",
      color: "from-red-500 to-rose-500",
    },
  ];

  const industries = [
    "互联网",
    "金融",
    "教育",
    "电商",
    "游戏",
    "硬件",
    "企业服务",
    "医疗健康",
    "其他",
  ];

  const handleSubmit = () => {
    if (!formData.companyName || !formData.warning) return;
    console.log("提交企业避雷信息:", formData, { isAnonymous });
    // 重置表单
    setFormData({
      companyName: "",
      location: "",
      industry: "",
      position: "",
      interviewProcess: "",
      salary: "",
      atmosphere: "",
      warning: "",
      riskLevel: "warning",
    });
  };

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <TopBarNav onBack={onBack} context="分享你的避坑指南">
      <div className="bg-white h-full flex flex-col">
        {/* 头部 */}
        <div className="flex items-center justify-between p-5 border-b border-gray-100 bg-gradient-to-r from-amber-50 to-orange-50">
          <div>
            <h2>分享避坑信息</h2>
            <p className="text-sm text-gray-600 mt-0.5">帮助更多人避开雷区</p>
          </div>
        </div>
        {/* 内容区域 */}
        <div className="flex-1 overflow-y-auto p-2">
          {/* 企业基本信息 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-3 ">
            <h3 className="mb-4 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-amber-600" />
              企业基本信息
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  企业名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => updateField("companyName", e.target.value)}
                  placeholder="输入企业全称"
                  className="w-full px-4 py-3 border-none ring-2 ring-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <MapPin className="w-3.5 h-3.5 inline mr-1" />
                    所在城市
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => updateField("location", e.target.value)}
                    placeholder="如：北京"
                    className="w-full px-4 py-3 border-none ring-2 ring-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-700 mb-2">
                    <Briefcase className="w-3.5 h-3.5 inline mr-1" />
                    行业
                  </label>
                  <input
                    type="text"
                    value={formData.industry}
                    onChange={(e) => updateField("industry", e.target.value)}
                    placeholder="如：互联网"
                    className="w-full px-4 py-3 border-none ring-2 ring-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  面试岗位
                </label>
                <input
                  type="text"
                  value={formData.position}
                  onChange={(e) => updateField("position", e.target.value)}
                  placeholder="你面试的岗位"
                  className="w-full px-4 py-3 border-none ring-2 ring-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* 风险等级 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <h3 className="mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              风险等级
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {riskLevels.map((level) => (
                <button
                  key={level.value}
                  onClick={() => updateField("riskLevel", level.value)}
                  className={`flex flex-col text-xs items-center gap-2 p-4 border-none rounded-xl ring-2 ring-gray-200 transition-all ${
                    formData.riskLevel === level.value
                      ? ` bg-gradient-to-br ${level.color} text-white shadow-lg scale-105`
                      : "ring-gray-200 hover:ring-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-sm text-center">{level.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* 详细信息 */}
          <div className="bg-white rounded-2xl border border-gray-200 p-5">
            <h3 className="mb-4 flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-600" />
              详细信息
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  面试流程
                </label>
                <textarea
                  value={formData.interviewProcess}
                  onChange={(e) =>
                    updateField("interviewProcess", e.target.value)
                  }
                  placeholder="几轮面试？每轮多久？面试官态度如何？"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  <DollarSign className="w-3.5 h-3.5 inline mr-1" />
                  薪资情况
                </label>
                <textarea
                  value={formData.salary}
                  onChange={(e) => updateField("salary", e.target.value)}
                  placeholder="offer薪资？是否符合预期？有没有隐藏扣除？"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  工作氛围
                </label>
                <textarea
                  value={formData.atmosphere}
                  onChange={(e) => updateField("atmosphere", e.target.value)}
                  placeholder="加班情况？团队氛围？办公环境如何？"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>

          {/* 避坑提醒 - 必填 */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-2xl p-5 mb-4">
            <h3 className="mb-3 flex items-center gap-2 text-amber-900">
              <AlertTriangle className="w-5 h-5" />
              避坑提醒 <span className="text-red-500">*</span>
            </h3>
            <textarea
              value={formData.warning}
              onChange={(e) => updateField("warning", e.target.value)}
              placeholder="重点！你最想提醒大家注意什么？&#10;比如：虚假招聘、压工资、画饼、PUA等"
              rows={4}
              className="w-full px-4 py-3 border border-amber-200 bg-white rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
            />
          </div>

          {/* 匿名开关 */}
          <div className="mb-4">
            <label className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl cursor-pointer border border-blue-100">
              <div>
                <div className="mb-1 text-gray-900">匿名发布</div>
                <p className="text-sm text-gray-600">保护你的身份信息</p>
              </div>
              <div
                className={`relative w-14 shrink-0 h-7 rounded-full transition-colors ${
                  isAnonymous
                    ? "bg-gradient-to-r from-blue-500 to-purple-500"
                    : "bg-gray-300"
                }`}
                onClick={() => setIsAnonymous(!isAnonymous)}
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                    isAnonymous ? "translate-x-8" : "translate-x-1"
                  }`}
                />
              </div>
            </label>
          </div>

          {/* 提示 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-xl p-4 mb-4">
            <p className="text-sm text-blue-900 leading-relaxed">
              💡 <strong>温馨提示：</strong>
              <br />
              • 请基于真实经历分享，不要恶意诽谤
              <br />
              • 避免泄露公司机密或个人隐私
              <br />• 客观描述，帮助他人做出判断
            </p>
          </div>
        </div>
        {/* 底部按钮 */}
        <div className="p-5 border-t border-gray-100 bg-gray-50">
          <button
            onClick={handleSubmit}
            disabled={!formData.companyName || !formData.warning}
            className={`w-full border-none ring-2 ring-gray-200 py-4 rounded-xl transition-all ${
              formData.companyName && formData.warning
                ? "bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 active:scale-[0.98] text-white shadow-lg"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            {formData.companyName && formData.warning
              ? "发布避雷信息 🛡️"
              : "请填写必填项"}
          </button>
        </div>
      </div>
    </TopBarNav>
  );
}
