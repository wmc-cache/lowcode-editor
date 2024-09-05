import { Button, Space } from 'antd';
import { useComponentsStore } from '../../stores/components';

export function Header() {

  const { setCurComponentId } = useComponentsStore();

  return (
    <div className='w-[100%] h-[100%]'>
      <div className='h-[50px] flex justify-between items-center px-[20px]'>
        <div>低代码编辑器</div>
        <Space>
          <Button
            onClick={() => {
              setCurComponentId(null)
              window.open('/preview')
            }}
            type='primary'
          >
            预览
          </Button>
        </Space>
      </div>
    </div>
  )
}
