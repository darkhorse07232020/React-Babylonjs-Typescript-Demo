import React from "react";

import { Engine, Scene } from "react-babylonjs";
import { Vector3 } from "@babylonjs/core";

import GltfModel from "./components/box";

const rootUrl = '/assets/';
const sceneFilename='building.glb';

const App: React.FC = () => (
  <Engine antialias={true} adaptToDeviceRatio={true} canvasId="test-canvas">
    <Scene>
      <arcRotateCamera
        name="camera1"
        inertialAlphaOffset={100}
        lowerRadiusLimit={1}
        upperRadiusLimit={10}
        wheelPrecision={50}
        alpha={Math.PI / 15}
        beta={Math.PI / 4.5}
        radius={9.0}
        target={Vector3.Zero()}
        minZ={0.001}
        position={Vector3.Zero()} />

      <hemisphericLight
        name="light1"
        intensity={0.7}
        direction={Vector3.Up()} />

      <GltfModel name="simple-box" rootUrl={rootUrl} sceneFilename={sceneFilename} />

      <ground name='ground' width={3} height={3} subdivisions={1} />
    </Scene>

  </Engine>
);

export default App;


