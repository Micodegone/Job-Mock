import { useState } from "react";
import { PostCard } from "@/pages/postDetail/PostCard";
import { mockPosts } from "@/pages/data/mockData";
import type { Post } from "@/types";
import { onBack } from "@/utils/back";
import Taro from "@tarojs/taro";
import { TopBarNav } from "@/components/TopBarNav";

export default function MyPosts() {
  const onPostClick = (post: Post) => {
    // 处理帖子点击事件
    Taro.navigateTo({
      url: `/pages/postDetail/PostDetail?postId=${post.id}`,
    });
  };

  const [filterType, setFilterType] = useState<
    "all" | "rant" | "guide" | "question"
  >("all");

  // 模拟用户发布的内容
  const myPosts = mockPosts.slice(0, 6);

  const filteredPosts =
    filterType === "all"
      ? myPosts
      : myPosts.filter((post) => post.type === filterType);

  const filters = [
    { value: "all" as const, label: "全部", count: myPosts.length },
    {
      value: "rant" as const,
      label: "吐槽",
      count: myPosts.filter((p) => p.type === "rant").length,
    },
    {
      value: "guide" as const,
      label: "避坑",
      count: myPosts.filter((p) => p.type === "guide").length,
    },
    {
      value: "question" as const,
      label: "提问",
      count: myPosts.filter((p) => p.type === "question").length,
    },
  ];

  const bottomSlot = (
    <div className="px-4 pb-4 overflow-x-auto">
      <div className="flex gap-2 min-w-max">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setFilterType(filter.value)}
            className={`flex items-center mt-1 gap-2 px-4 py-2 rounded-full border-none ring-2 ring-white transition-all whitespace-nowrap ${
              filterType === filter.value
                ? "bg-white text-purple-600 ring-white scale-105"
                : "bg-white/20 backdrop-blur text-white ring-white/30 hover:bg-white/30"
            }`}
          >
            <span className="text-xs">{filter.label}</span>
            <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full">
              {filter.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
  const style =
    "bg-gradient-to-br text-white from-blue-500 via-purple-500 to-pink-500";
  return (
    <TopBarNav
      onBack={onBack}
      context="我发过的贴子"
      style={style}
      bottomSlot={bottomSlot}
    >
      {/* 内容列表 */}
      <div className="flex-1 overflow-y-auto">
        {filteredPosts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-600 text-center mb-2">这里还没有内容</p>
            <p className="text-gray-500 text-sm text-center">
              去首页发布你的第一条内容吧
            </p>
          </div>
        ) : (
          <div className="bg-white shadow-sm rounded-t-3xl mt-2">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onClick={() => onPostClick(post)}
              />
            ))}
          </div>
        )}
      </div>
    </TopBarNav>
  );
}
