import React, { useState, useRef, useLayoutEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import E from "wangeditor";
import { useTranslation } from "react-i18next";
import { TEXT } from "../../../common/i18n/keys";
import clsx from "clsx";

interface IOwnProps {
  className?: string;
  uploadApiUrl?: string;
}
type EditorProps = IOwnProps;

let editor: any;
export default function Editor(props: EditorProps) {
  const [editorContent, changeEditorContent] = useState("");
  const editorElem = useRef(null);
  const { t } = useTranslation();

  useLayoutEffect(() => {
    const elem = editorElem.current;
    editor = new E(elem);
    editor.customConfig.onchange = (html: any) => {
      changeEditorContent(html);
    };
    editor.create();
  }, []);

  function onClickUpload() {
    if (props.uploadApiUrl) {
      // TODO: Call Upload API
    }
    console.log(editorContent);
    console.log(JSON.stringify(editor.txt.getJSON()));
  }

  return (
    <Card className={clsx("editor", props.className)}>
      <div ref={editorElem} />
      <CardActions>
        <Button variant="contained" fullWidth onClick={onClickUpload}>
          <Typography>{t(TEXT.UPLOAD)}</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

// interface IOwnProps {
//   customConfig: {
//     /**
//      *配置菜单
//      */
//     menus?: [];
//     /**
//      *debug模式
//      */
//     debug?: boolean;
//     /**
//      * onchange
//      */
//     onchange: (html: HTMLDocument) => {};
//     /**
//      * 配置编辑区域z-index
//      */
//     zIndex?: number;
//     /**
//      * 多语言
//      */
//     lang?: {};
//     /**
//      * 关闭粘贴样式的过滤
//      */
//     pasteFilterStyle?: boolean;
//     /**
//      * 忽略粘贴内容中的图片
//      */
//     pasteIgnoreImg?: boolean;
//     /**
//      * 自定义处理粘贴的文本内容
//      */
//     pasteTextHandle?: (html: HTMLDocument) => {};
//     /**
//      * 插入网络图片的回调
//      */
//     linkImgCallback?: (url: string) => {};
//     /**
//      * 插入链接的校验
//      */
//     linkCheck?: (text: string, link: string) => boolean;
//     /**
//      * 插入网络图片的校验
//      */
//     linkImgCheck?: (src: string) => boolean;
//     /**
//      * 配置颜色
//      */
//     colors?: [string];
//     /**
//      * onfocus callback
//      */
//     onfocus?: () => {};
//     /**
//      * onblur callback
//      */
//     onblur?: (html: HTMLDocument) => {};
//     /**
//      * 配置表情
//      */
//     emotions?: [
//       {
//         /**
//          * tab 的标题
//          */
//         title: string;
//         /**
//          * type: "emoji"  OR "image"
//          */
//         type: "emoji" | "image";
//         content: [
//           | string
//           | {
//               alt: string;
//               src: string;
//             }
//         ];
//       }
//     ];
//     /**
//      * 配置字体
//      */
//     fontNames?:[string]
//   };
// }

// type EditorProps = IOwnProps;
