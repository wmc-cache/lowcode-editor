import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

// 获取目标容器
const rootElement = document.getElementById('root');
console.log("rootElement", rootElement)

if (rootElement) {
    // 确保容器存在时才渲染
    ReactDOM.createRoot(rootElement).render(
        <DndProvider backend={HTML5Backend}>
            <App />
        </DndProvider>
    );
} else {
    console.error("Root container is not found. Please check your index.html file.");
}
