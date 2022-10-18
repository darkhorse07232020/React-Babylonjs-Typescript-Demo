import React, { Suspense } from "react";
import { Vector3 } from "@babylonjs/core";
import { Model } from 'react-babylonjs';
import '@babylonjs/loaders/glTF';

interface Props {
  name: string;
  rootUrl: string;
  sceneFilename: string;
}


const GltfModel: React.FC<Props> = ({ name, rootUrl, sceneFilename }) => (
  <Suspense fallback={null}>
    <Model
      rootUrl={rootUrl}
      sceneFilename={sceneFilename}
      name={name}
      scaleToDimension={1}
      position={new Vector3(0, -0.08, 0)}
    />
  </Suspense>
);

export default GltfModel;