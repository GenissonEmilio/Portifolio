import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

interface Props {
  path: string
}

export function NotebookModel({ path }: Props) {
  const modelRef = useRef<Group>(null!)
  const gltf = useGLTF(path)

  // opcional: rotação lenta
  useFrame(() => {
    modelRef.current.rotation.y += 0.003
  })

  return <primitive ref={modelRef} object={gltf.scene} scale={2.5} />
}
