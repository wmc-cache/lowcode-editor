import MonacoEditor, { OnMount } from '@monaco-editor/react';
import { useMemo } from 'react';
import { useComponentsStore } from '../../stores/components';

export function Source() {
  const { components } = useComponentsStore();

  // 使用 useMemo 优化 JSON 字符串化操作
  const jsonValue = useMemo(() => JSON.stringify(components, null, 2), [components]);

  const handleEditorMount: OnMount = (editor, monaco) => {
    // 添加自定义快捷键（Ctrl+J）以格式化文档
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KeyJ, () => {
      editor.getAction('editor.action.formatDocument')?.run();
    });
  };

  return (
    <MonacoEditor
      height="100%"
      path="components.json"
      language="json"
      onMount={handleEditorMount}
      value={jsonValue}
      options={{
        fontSize: 14,
        scrollBeyondLastLine: false,
        minimap: {
          enabled: false,
        },
        scrollbar: {
          verticalScrollbarSize: 6,
          horizontalScrollbarSize: 6,
        },
      }}
    />
  );
}
