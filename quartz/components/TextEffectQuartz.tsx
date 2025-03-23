// /** @jsx h */
// import { h } from "preact"
// import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// import TextEffect from "../util/GPT"

// const TextEffectQuartz: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
//   const text = String(
//     fileData.frontmatter?.textEffectText ?? "👋 Hello from Quartz typing effect!"
//   )
  
//   return h(
//     "div", 
//     { 
//       style: { 
//         minHeight: "300px",
//         overflow: "hidden",
//         position: "relative",
//         display: "block"
//       }
//     },
//     h(TextEffect, {
//       text,
//       minTypingDelay: 1,
//       maxTypingDelay: 1,
//       thinkingDelay: 100,
//       notDisplayCaretAfterFinishes: true,
//       styles: {
//         fontSize: "1.2rem",
//         lineHeight: 1.5,
//         display: "inline-block",
//         padding: "0.5rem"
//       },
//       caretBackground: "#666", // 更显眼的颜色
//       cursorBlinkSpeed: 600    // 更明显的闪烁
//     })
//   )
// }

// export default (() => TextEffectQuartz) satisfies QuartzComponentConstructor