import type { UserConfigExport } from "@tarojs/cli";

export default {
  logger: {
    quiet: false,
    stats: true,
  },
  mini: {},
  h5: {
    devServer: {
      port: 8080,
      host: "0.0.0.0",
      hot: true,
    },
  },
} satisfies UserConfigExport<"webpack5">;
