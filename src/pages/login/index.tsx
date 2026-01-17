import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Taro from "@tarojs/taro";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [agreeTerm, setAgreeTerm] = useState(false);

  const handleLogin = () => {
    if (!phone || !agreeTerm) return;
    // 登录
    Taro.reLaunch({
      url: "/pages/index/index",
    });
  };

  const canLogin = phone && agreeTerm;

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-blue-50">
      {/* Logo区域 */}
      <div className="flex flex-col items-center pt-5 pb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mb-4 shadow-xl">
          <span className="text-5xl">💼</span>
        </div>
        <h1 className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
          求职吐槽社区
        </h1>
        <p className="text-gray-500 text-sm">和00后一起，安全吐槽不迷路</p>
      </div>

      {/* 登录表单 */}
      <div className="flex-1 px-6">
        <div className="space-y-4 mb-8">
          {/* 手机号输入 */}
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="输入手机号"
            className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white shadow-sm transition-all placeholder:text-gray-400"
          />

          {/* 密码输入 */}
          <div className="relative">
            <input
              type={showPassword ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="输入密码"
              className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-0 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:bg-white shadow-sm transition-all placeholder:text-gray-400 pr-12"
            />
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5" />
              ) : (
                <Eye className="w-5 h-5" />
              )}
            </div>
          </div>

          {/* 登录按钮 */}
          <button
            onClick={handleLogin}
            disabled={!canLogin}
            className={`w-full py-4 rounded-2xl transition-all border-none shadow-lg ${
              canLogin
                ? "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] text-white"
                : "bg-gray-200 text-gray-400 ring-2 ring-gray-300"
            }`}
          >
            登录
          </button>

          {/* 协议 */}
          <label className="flex items-center justify-center gap-2 cursor-pointer">
            <div
              onClick={() => setAgreeTerm(!agreeTerm)}
              className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                agreeTerm
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 border-transparent"
                  : "bg-gray-400"
              }`}
            >
              {agreeTerm && (
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <p className="text-xs text-gray-500">
              已阅读并同意
              <a href="#" className="text-purple-600 mx-0.5">
                服务协议
              </a>
              和
              <a href="#" className="text-purple-600 mx-0.5">
                隐私保护指引
              </a>
            </p>
          </label>
        </div>

        {/* 分割线 */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-xs text-gray-400">其他登录方式</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* 其他登录方式 */}
        {/* <div className="flex items-center justify-center gap-8 mb-8">
          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all group-hover:scale-110">
              <span className="text-2xl">📱</span>
            </div>
            <span className="text-xs text-gray-600">手机号登录</span>
          </button>

          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all group-hover:scale-110">
              <span className="text-2xl">💬</span>
            </div>
            <span className="text-xs text-gray-600">微信登录</span>
          </button>

          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all group-hover:scale-110">
              <span className="text-2xl">➕</span>
            </div>
            <span className="text-xs text-gray-600">注册</span>
          </button>

          <button className="flex flex-col items-center gap-2 group">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-all group-hover:scale-110">
              <span className="text-2xl">•••</span>
            </div>
            <span className="text-xs text-gray-600">更多</span>
          </button>
        </div> */}
      </div>
    </div>
  );
}
