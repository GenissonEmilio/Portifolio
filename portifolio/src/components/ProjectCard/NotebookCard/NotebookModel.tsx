import { useGLTF, useVideoTexture } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group, Mesh, MeshStandardMaterial } from 'three'

interface Props {
  path: string
}

export function NotebookModel({ path }: Props) {
  const modelRef = useRef<Group>(null!)
  const gltf = useGLTF(path)
  const videoTexture = useVideoTexture('/videos/demo.mp4')

  // Aplica vídeo na malha "Screen"
  const screenMesh = gltf.scene.getObjectByName('Screen')

  if (screenMesh && screenMesh instanceof Mesh) {
    screenMesh.material = new MeshStandardMaterial({ map: videoTexture })
  }

  useFrame(() => {
    // Sem rotação automática
  })

  return <primitive ref={modelRef} object={gltf.scene} scale={2.5} />
}
