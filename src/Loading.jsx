import { SunspotLoader } from 'react-awesome-loaders';

function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <SunspotLoader
        gradientColors={['#fdba74', '#fed7aa']}
        shadowColor={'#3730A3'}
        desktopSize={'128px'}
        mobileSize={'100px'}
      />
    </div>
  );
}

export default Loading;
