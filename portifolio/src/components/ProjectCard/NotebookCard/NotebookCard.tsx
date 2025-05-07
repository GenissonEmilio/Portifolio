import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import styles from './NotebookCard.module.css';
import { NotebookModel } from './NotebookModel';

function NotebookCard() {
  return (
    <div className={styles.notebookContainer}>
      <Canvas camera={{ position: [0, 0, 5], fov: 35 }}>
        <Stage environment="city" intensity={0.6}>
          <NotebookModel path="/models/notebook.glb" />
        </Stage>
        {/* Efeito limitado de rotação */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2.2}
          minPolarAngle={Math.PI / 2.5}
          maxAzimuthAngle={Math.PI / 6}
          minAzimuthAngle={-Math.PI / 6}
        />
      </Canvas>
    </div>
  );
}

export default NotebookCard;
